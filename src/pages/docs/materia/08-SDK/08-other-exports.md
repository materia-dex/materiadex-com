---
title: Other Exports
tags: sdk, documentation
---

# JSBI

```typescript
import { JSBI } from '@materia/sdk'
// import JSBI from 'jsbi'
```

The default export from [jsbi](https://github.com/GoogleChromeLabs/jsbi).

# BigintIsh

```typescript
import { BigintIsh } from '@materia/sdk'
// type BigintIsh = JSBI | bigint | string
```

A union type comprised of all types that can be cast to a JSBI instance.

# ChainId

```typescript
import { ChainId } from '@materia/sdk'
// enum ChainId {
//   MAINNET = 1,
//   ROPSTEN = 3,
//   RINKEBY = 4,
//   GÖRLI = 5,
//   KOVAN = 42
// }
```

A enum denominating supported chain IDs.

# TradeType

```typescript
import { TradeType } from '@materia/sdk'
// enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }
```

A enum denominating supported trade types.

# Rounding

```typescript
import { Rounding } from '@materia/sdk'
// enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }
```

A enum denominating supported rounding options.

# FACTORY_ADDRESS

```typescript
import { FACTORY_ADDRESS } from '@materia/sdk'
```

The <Link to='/docs/materia/smart-contracts/factory/#address'>factory address</Link>.

# ORCHESTRATOR_ADDRESS

```typescript
import { ORCHESTRATOR_ADDRESS } from '@materia/sdk'
```

The <Link to='/docs/materia/smart-contracts/orchestrator/#address'>orchestrator address</Link>.

# INIT_CODE_HASH

```typescript
import { INIT_CODE_HASH } from '@materia/sdk'
```

See <Link to='/docs/materia/smart-contracts/factory/#address'>Pair Addresses</Link>.

# MINIMUM_LIQUIDITY

```typescript
import { MINIMUM_LIQUIDITY } from '@materia/sdk'
```

See <Link to='/docs/materia/protocol-overview/smart-contracts/#minimum-liquidity'>Minimum Liquidity</Link>.

# ADD_LIQUIDITY_ACTION_SAFE_TRANSFER_TOKEN

```typescript
import { ADD_LIQUIDITY_ACTION_SAFE_TRANSFER_TOKEN } from '@materia/sdk'
```

The safeTransfer addLiquidity operation number used in the orchestrator onERC1155Received callback. The value is 1.

# SWAP_ACTION_EXACT_TOKENS_FOR_TOKENS

```typescript
import { SWAP_ACTION_EXACT_TOKENS_FOR_TOKENS } from '@materia/sdk'
```

The swapExactTokensForTokens operation number used in the orchestrator onERC1155Received callback. The value is 2.

# SWAP_ACTION_TOKENS_FOR_EXACT_TOKENS

```typescript
import { SWAP_ACTION_TOKENS_FOR_EXACT_TOKENS } from '@materia/sdk'
```

The swapTokensForExactTokens operation number used in the orchestrator onERC1155Received callback. The value is 3.

# SWAP_ACTION_EXACT_TOKENS_FOR_ETH

```typescript
import { SWAP_ACTION_EXACT_TOKENS_FOR_ETH } from '@materia/sdk'
```

The swapExactTokensForETH operation number used in the orchestrator onERC1155Received callback. The value is 4.

# SWAP_ACTION_TOKENS_FOR_EXACT_ETH

```typescript
import { SWAP_ACTION_TOKENS_FOR_EXACT_ETH } from '@materia/sdk'
```

The swapTokensForExactETH operation number used in the orchestrator onERC1155Received callback. The value is 5.

# InsufficientReservesError

```typescript
import { InsufficientReservesError } from '@materia/sdk'
```

# InsufficientInputAmountError

```typescript
import { InsufficientInputAmountError } from '@materia/sdk'
```

# IETH

```typescript
import { IETH } from '@materia/sdk'
```

An object whose values are <Link to='/docs/materia/smart-contracts/orchestrator/#ieth'>IETH</Link> <Link to='/docs/materia/SDK/token'>Token</Link> instances, indexed by [ChainId](#chainid). IETH is the representation of Ethereum in the EthItem ecosystem.