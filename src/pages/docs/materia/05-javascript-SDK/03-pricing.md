---
title: Pricing
tags: SDK, developer-guides, documentation
---

Looking for a <Link to='/docs/materia/javascript-SDK/quick-start'>quickstart</Link>?

Let's talk pricing. This guide will focus on the two most important Materia prices: the **mid price** and the **execution price**.

# Mid Price

The mid price, in the context of Materia, is the price that reflects the _ratio of reserves in one or more pairs_. There are three ways we can think about this price. Perhaps most simply, it defines the relative value of one token in terms of the other. It also represents the price at which you could theoretically trade an infinitesimal amount (ε) of one token for the other. Finally, it can be interpreted as the current _market-clearing or fair value price_ of the assets.

Let's consider the mid price for WUSD-IETH (that is, the amount of WUSD per 1 IETH).

## Direct

The simplest way to get the WUSD-IETH mid price is to observe the pair directly:

```typescript
import { ChainId, Token, IETH, Fetcher, Route } from '@materia/sdk'

const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const pair = await Fetcher.fetchPairData(WUSD, IETH[WUSD.chainId])

const route = new Route([pair], IETH[WUSD.chainId])

console.log(route.midPrice.toSignificant(6)) // 201.306
console.log(route.midPrice.invert().toSignificant(6)) // 0.00496756
```

You may be wondering why we have to construct a _route_ to get the mid price, as opposed to simply getting it from the pair (which, after all, includes all the necessary data). The reason is simple: a route forces us to be opinionated about the _direction_ of trading. Routes consist of one or two pairs (with the use of the bridge token), and an input token (which fully defines a trading path). In this case, we passed IETH as the input token, meaning we're interested in a IETH -> WUSD trade.

Now we understand that the mid price is going to be defined in terms of WUSD/IETH. Not to worry though, if we need the IETH/WUSD price, we can easily invert.

Finally, you may have noticed that we're formatting the price to 6 significant digits. This is because internally, prices are stored as exact-precision fractions, which can be converted to other representations on demand. For a full list of options, see <Link to='/docs/materia/SDK/fractions#price'>Price</Link>.

## Indirect

For the sake of example, let's imagine we want to trade IETH to IUSDC. In order to get a IETH-IUSDC mid price we'll need to pick a valid route. Imagine both IUSDC and IETH already have pairs with the bridge token, WUSD. In that case, we can calculate an indirect mid price through the WUSD pairs: 

```typescript
import { ChainId, Token, IETH, Fetcher, Route } from '@materia/sdk'

const IUSDC = new Token(ChainId.MAINNET, '0x7a3428F1CBA2756aB9a6D672311ca6C8DcE65C6B', 18)
const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const IETHPair = await Fetcher.fetchPairData(WUSD, IETH[ChainId.MAINNET])
const IUSDCPair = await Fetcher.fetchPairData(WUSD, IUSDC)

const route = new Route([IETHPair, IUSDCPair], IETH[ChainId.MAINNET])

console.log(route.midPrice.toSignificant(6)) // 202.081
console.log(route.midPrice.invert().toSignificant(6)) // 0.00494851
```

# Execution Price

Mid prices are great representations of the _current_ state of a route, but what about trades? It turns out that it makes sense to define another price, the _execution_ price of a trade, as the ratio of assets sent/received.

Imagine we're interested in trading 1 IETH for WUSD:

```typescript
import { ChainId, Token, IETH, Fetcher, Trade, Route, TokenAmount, TradeType } from '@materia/sdk'

const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const pair = await Fetcher.fetchPairData(WUSD, IETH[WUSD.chainId])

const route = new Route([pair], IETH[WUSD.chainId])

const trade = new Trade(route, new TokenAmount(IETH[WUSD.chainId], '1000000000000000000'), TradeType.EXACT_INPUT)

console.log(trade.executionPrice.toSignificant(6))
console.log(trade.nextMidPrice.toSignificant(6))
```

Notice that we're constructing a trade of 1 IETH for as much WUSD as possible, _given the current reserves of the direct pair_. The execution price represents the average WUSD/IETH price for this trade. Of course, the reserves of any pair can change every block, which would affect the execution price.

Also notice that we're able to access the _next_ mid price, if the trade were to complete successfully before the reserves changed.
