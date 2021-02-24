---
title: Trading
tags: SDK, developer-guides, documentation
---

Looking for a <Link to='/docs/materia/javascript-SDK/quick-start'>quickstart</Link>?

The SDK _cannot execute trades or send transactions on your behalf_. Rather, it offers utility classes and functions which make it easy to calculate the data required to safely interact with Materia. Nearly everything you need to safely transact with Materia is provided by the <Link to='/docs/materia/SDK/trade'>Trade</Link> entity. However, it is your responsibility to use this data to send transactions in whatever context makes sense for your application.

This guide will focus exclusively on sending a transaction to the <Link to='/docs/materia/smart-contracts/orchestrator'>currently recommended Materia orchestrator</Link>.

# Sending a Transaction to the Orchestrator

Let's say we want to trade 1 IETH for as much IDAI as possible:

```typescript
import { ChainId, Token, IETH, Fetcher, Trade, Route, TokenAmount, TradeType } from '@materia/sdk'

const IDAI = new Token(ChainId.MAINNET, '0x4d69a1d482ff9b89600c1DD9e535538957Cd8E29', 18)
const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const IDAIpair = await Fetcher.fetchPairData(IDAI, WUSD)
const IETHpair = await Fetcher.fetchPairData(IETH[WUSD.chainId], WUSD)

const route = new Route([IETHpair, IDAIpair], WUSD)

const amountIn = '1000000000000000000' // 1 IETH

const trade = new Trade(route, new TokenAmount(IETH[WUSD.chainId], amountIn), TradeType.EXACT_INPUT)
```

So, we've constructed a trade entity, but how do we use it to actually send a transaction? There are still a few pieces we need to put in place.

Before going on, we should explore how ETH works in the context of trading. Internally, the SDK uses IETH. However, it's perfectly possible for you as an end user to use ETH, and rely on the router to handle converting to/from IETH. So, let's use ETH.

The first step is selecting the appropriate orchestrator function. The names of orchestrator functions are intended to be self-explanatory; in this case we want <Link to='/docs/materia/smart-contracts/orchestrator/#swapexactethfortokens'>swapExactETHForTokens</Link>, because we're swapping an exact amount of ETH for tokens.

That Solidity interface for this function is:

```solidity
function swapExactETHForTokens(
    uint amountOutMin,
    address[] memory path,
    address to,
    uint deadline
) external payable;
```

Jumping back to our trading code, we can construct all the necessary parameters:

```typescript
import { Percent } from '@materia/sdk'

const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%

const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex
const path = [IETH[WUSD.chainId].address, WUSD.address, IDAI.address]
const to = '' // should be a checksummed recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
const value = trade.inputAmount.raw // // needs to be converted to e.g. hex
```

The slippage tolerance encodes _how large of a price movement we're willing to tolerate before our trade will fail to execute_. Since Ethereum transactions are broadcast and confirmed in an adversarial environment, this tolerance is the best we can do to protect ourselves against price movements. We use this slippage tolerance to calculate the _minumum_ amount of IDAI we must receive before our trade reverts, thanks to <Link to='/docs/materia/SDK/trade/#minimumamountout-since-204'>minimumAmountOut</Link>. Note that this code calculates this worst-case outcome _assuming that the current price, i.e the route's mid price,_ is fair (usually a good assumption because of arbitrage).

The path is simply the ordered list of token addresses we're trading through, in our case IETH, WUSD and IDAI (note that we use the IETH address, even though we're using ETH). 

The to address is the address that will receive the IDAI.

The deadline is the Unix timestamp after which the transaction will fail, to protect us in the case that our transaction takes a long time to confirm and we wish to rescind our trade.

The value is the amount of ETH that must be included as the `msg.value` in our transaction.
