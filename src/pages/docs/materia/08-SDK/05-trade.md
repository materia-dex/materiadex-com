---
title: Trade
tags: sdk, documentation
---

```typescript
constructor(route: Route, amount: TokenAmount, tradeType: TradeType)
```

The Trade entity represents a fully specified trade along a route. This entity supplies all the information necessary to craft an orchestrator transaction.

# Example

```typescript
import { ChainId, Token, TokenAmount, Pair, Route, IETH } from '@materia/sdk'

const BASE_FEE = JSBI.BigInt(30)
const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18, 'WUSD', 'Wrapped USD')
const WUSD_IETH = new Pair(new TokenAmount(WUSD, '2000000000000000000'), new TokenAmount(IETH[WUSD.chainId], '1000000000000000000'), BASE_FEE)
const WUSD_TO_IETH = new Route([WUSD_IETH], WUSD)

const trade = new Trade(WUSD_TO_IETH, new TokenAmount(WUSD, '1000000000000000'), TradeType.EXACT_INPUT)
```

# Properties

## route

```typescript
route: Route
```

The <Link to='/docs/materia/SDK/route#path'>path</Link> property of the route should be passed as the path parameter to orchestrator functions. Note that in Materia every pair is constructed using EthItems only.

## tradeType

```typescript
tradeType: TradeType
```

`TradeType.EXACT_INPUT` corresponds to `swapExact*For*` orchestrator functions. `TradeType.EXACT_OUTPUT` corresponds to `swap*ForExact*` orchestrator functions.

## inputAmount

```typescript
inputAmount: TokenAmount
```

For exact input trades, this value should be passed as amountIn to orchestrator functions. For exact output trades, this value should be multiplied by a factor >1, representing slippage tolerance, and passed as amountInMax to orchestrator functions.

## outputAmount

```typescript
outputAmount: TokenAmount
```

For exact output trades, this value should be passed as amountOut to orchestrator functions. For exact input trades, this value should be multiplied by a factor <1, representing slippage tolerance, and passed as amountOutMin to orchestrator functions.

## executionPrice

```typescript
executionPrice: Price
```

The average price that the trade would execute at.

## nextMidPrice

```typescript
nextMidPrice: Price
```

What the new mid price would be if the trade were to execute.

## slippage

```typescript
slippage: Percent
```

The slippage incurred by the trade.

- Strictly > .30%.

# Methods

In the context of the following two methods, slippage refers to the percent difference between the actual price and the trade `executionPrice`.

## minimumAmountOut

```typescript
minimumAmountOut(slippageTolerance: Percent): TokenAmount
```

Returns the minimum amount of the output token that should be received from a trade, given the slippage tolerance.

Useful when constructing a transaction for a trade of type `EXACT_IN`.

## maximumAmountIn

```typescript
maximumAmountIn(slippageTolerance: Percent): TokenAmount
```

Returns the maximum amount of the input token that should be spent on the trade, given the slippage tolerance.

Useful when constructing a transaction for a trade of type `EXACT_OUT`.

# Static methods

These static methods provide ways to construct ideal trades from lists of pairs.
Note these methods do not perform any aggregation across routes, as routes are linear.
It's possible that a better price can be had by combining multiple trades across
different routes.

## bestTradeExactIn

Given a list of pairs, a fixed amount in, and token amount out,
this method returns the best `maxNumResults` trades that swap
an input token amount to an output token, making at most `maxHops` hops.
The returned trades are sorted by output amount, in decreasing order, and
all share the given input amount.

```typescript
Trade.bestTradeExactIn(
    pairs: Pair[],
    amountIn: TokenAmount,
    tokenOut: Token,
    { maxNumResults = 3, maxHops = 2 }: BestTradeOptions = {}): Trade[]
```

## bestTradeExactOut

Similar to the above method, but targets a fixed output token amount.
The returned trades are sorted by input amount, in increasing order,
and all share the given output amount.

```typescript
Trade.bestTradeExactOut(
    pairs: Pair[],
    tokenIn: Token,
    amountOut: TokenAmount,
    { maxNumResults = 3, maxHops = 2 }: BestTradeOptions = {}): Trade[]
```
