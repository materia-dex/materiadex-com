---
title: Pair
tags: sdk, documentation
---

```typescript
constructor(tokenAmountA: TokenAmount, tokenAmountB: TokenAmount, swapFee?: JSBI)
```

The Pair entity represents a Materia pair with a balance of each of its pair tokens and the defined swap fee. The BASE_FEE value (0.3%) is used if the swapFee parameter is not passed in arguments.

# Example

```typescript
import { ChainId, Token, TokenAmount, Pair, JSBI, IETH } from '@materia/sdk'

const BASE_FEE = JSBI.BigInt(30)
const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18, 'WUSD', 'Wrapped USD')

const pair = new Pair(new TokenAmount(WUSD, '2000000000000000000'), new TokenAmount(IETH[WUSD.chainId], '1000000000000000000'), BASE_FEE)
```

# Static Methods

## getAddress

```typescript
getAddress(tokenA: Token, tokenB: Token): string
```

Computes the pair address for the passed <Link to='/docs/materia/SDK/token'>Token</Link>s using the <Link to='/docs/materia/SDK/other-exports/#init_code_hash'>INIT_CODE_HASH</Link>. See <Link to='/docs/materia/javascript-SDK/getting-pair-addresses/'>Pair Addresses</Link>.

# Properties

## liquidityToken

```typescript
liquidityToken: Token
```

A Token representing the liquidity token for the pair. See <Link to='/docs/materia/smart-contracts/pair-erc-20'>Pair (ERC-20)</Link>.

## swapFee

```typescript
swapFee: JSBI
```

The dynamic swap fee value that can be changed though a DFO proposal.

## token0

```typescript
token0: Token
```

See <Link to='/docs/materia/smart-contracts/pair/#token0'>token0</Link>.

## token1

```typescript
token1: Token
```

See <Link to='/docs/materia/smart-contracts/pair/#token1'>token1</Link>.

## reserve0

```typescript
reserve0: TokenAmount
```

The reserve of token0.

## reserve1

```typescript
reserve1: TokenAmount
```

The reserve of token1.

# Methods

## reserveOf

```typescript
reserveOf(token: Token): TokenAmount
```

Returns reserve0 or reserve1, depending on whether token0 or token1 is passed in.

## getOutputAmount

```typescript
getOutputAmount(inputAmount: TokenAmount): [TokenAmount, Pair]
```

Pricing function for exact input amounts. Returns maximum output amount based on current reserves and the new Pair that would exist if the trade were executed.

## getInputAmount

```typescript
getInputAmount(outputAmount: TokenAmount): [TokenAmount, Pair]
```

Pricing function for exact output amounts. Returns minimum input amount based on current reserves and the new Pair that would exist if the trade were executed.

## getLiquidityMinted

```typescript
getLiquidityMinted(totalSupply: TokenAmount, tokenAmountA: TokenAmount, tokenAmountB: TokenAmount): TokenAmount
```

Calculates the exact amount of liquidity tokens minted from a given amount of token0 and token1.

- totalSupply must be looked up on-chain.
- The value returned from this function _cannot_ be used as an input to getLiquidityValue.

## getLiquidityValue

```typescript
getLiquidityValue(
  token: Token,
  totalSupply: TokenAmount,
  liquidity: TokenAmount,
  feeOn: boolean = false,
  kLast?: BigintIsh
): TokenAmount
```

Calculates the exact amount of token0 or token1 that the given amount of liquidity tokens represent.

- totalSupply must be looked up on-chain.
- If the protocol charge is on, feeOn must be set to true, and kLast must be provided from an on-chain lookup.
- Values returned from this function _cannot_ be used as inputs to getLiquidityMinted.
