---
title: Route
tags: sdk, documentation
---

```typescript
constructor(pairs: Pair[], input: Token)
```

The Route entity represents the ordered Materia pairs with a fully specified path from input token to output token. The route is typically one or two pairs long (if the bridge token is not involved in the trade).

# Example

```typescript
import { ChainId, Token, TokenAmount, Pair, Route, IETH } from '@materia/sdk'

const BASE_FEE = JSBI.BigInt(30)
const WUSD = new Token(ChainId.MAINNET, '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8', 18, 'WUSD', 'Wrapped USD')
const WUSD_IETH = new Pair(new TokenAmount(WUSD, '2000000000000000000'), new TokenAmount(IETH[WUSD.chainId], '1000000000000000000'), BASE_FEE)

const route = new Route([WUSD_IETH], WUSD)
```

# Properties

## pairs

```typescript
pairs: Pair[]
```

The ordered pairs that the route is comprised of.

## path

```typescript
path: Token[]
```

The full path from input token to output token.

## input

```typescript
input: string
```

The input token.

## output

```typescript
output: string
```

The output token.

## midPrice

```typescript
midPrice: Price
```

Returns the current mid price along the route.
