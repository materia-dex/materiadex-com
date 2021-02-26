---
title: Pair
tags: smart-contracts, documentation
---

This documentation covers Materia-specific functionality. For ERC-20 functionality, see <Link to='/docs/materia/smart-contracts/pair-erc-20'>Pair (ERC-20)</Link>.

# Code

[`MateriaPair.sol`](https://github.com/materia-dex/materia-contracts-core/blob/master/contracts/MateriaPair.sol)

# Address

See <Link to='/docs/materia/smart-contract-integration/getting-pair-addresses/'>Pair Addresses</Link>.

# Events

## Mint

```solidity
event Mint(address indexed sender, uint amount0, uint amount1);
```

Emitted each time liquidity tokens (MPs) are created via [mint](#mint-1).

## Burn

```solidity
event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
```

Emitted each time liquidity tokens (MPs) are destroyed via [burn](#burn-1).

## Swap

```solidity
event Swap(
  address indexed sender,
  uint amount0In,
  uint amount1In,
  uint amount0Out,
  uint amount1Out,
  address indexed to
);
```

Emitted each time a swap occurs via [swap](#swap-1).

## Sync

```solidity
event Sync(uint112 reserve0, uint112 reserve1);
```

Emitted each time reserves are updated via [mint](#mint-1), [burn](#burn-1), [swap](#swap-1), or [sync](#sync-1).

# Read-Only Functions

## MINIMUM_LIQUIDITY

```solidity
function MINIMUM_LIQUIDITY() external pure returns (uint);
```

Returns `1000` for all pairs. See <Link to='/docs/materia/protocol-overview/smart-contracts/#minimum-liquidity'>Minimum Liquidity</Link>.

## factory

```solidity
function factory() external view returns (address);
```

Returns the <Link to='/docs/materia/smart-contracts/factory/#address'>factory address</Link>.

## owner

```solidity
function owner() external view returns (address);
```

Returns the <Link to='/docs/materia/smart-contracts/factory/#address'>owner address</Link>, that is the factory.

## token0

```solidity
function token0() external view returns (address);
```

Returns the address of the pair token with the lower sort order.

## token1

```solidity
function token1() external view returns (address);
```

Returns the address of the pair token with the higher sort order.

## getReserves

```solidity
function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
```

Returns the reserves of token0 and token1 used to price trades and distribute liquidity. See <Link to='/docs/materia/advanced-topics/pricing/'>Pricing</Link>. Also returns the `block.timestamp` (mod `2**32`) of the last block during which an interaction occured for the pair.

## price0CumulativeLast

```solidity
function price0CumulativeLast() external view returns (uint);
```

See <Link to='/docs/materia/core-concepts/oracles/'>Oracles</Link>.

## price1CumulativeLast

```solidity
function price1CumulativeLast() external view returns (uint);
```

See <Link to='/docs/materia/core-concepts/oracles/'>Oracles</Link>.

## kLast

```solidity
function kLast() external view returns (uint);
```

Returns the product of the reserves as of the most recent liquidity event. See <Link to='/docs/materia/advanced-topics/fees/#protocol-charge-calculation'>Protocol Charge Calculation</Link>.

# State-Changing Functions

## mint

```solidity
function mint(address to) external returns (uint liquidity);
```

Creates pool tokens.

- Emits [Mint](#mint), [Sync](#sync), <Link to='/docs/materia/smart-contracts/pair-erc-20#transfer'>Transfer</Link>.

## burn

```solidity
function burn(address to) external returns (uint amount0, uint amount1);
```

Destroys pool tokens.

- Emits [Burn](#burn), [Sync](#sync), <Link to='/docs/materia/smart-contracts/pair-erc-20#transfer'>Transfer</Link>.

## swap

```solidity
function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
```

Swaps tokens. For regular swaps, `data.length` must be `0`. Also see <Link to='/docs/materia/core-concepts/flash-swaps/'>Flash Swaps</Link>.

- Emits [Swap](#swap), [Sync](#sync).

## skim

```solidity
function skim(address to) external;
```

See the <a href='/whitepaper.pdf' target='_blank' rel='noopener noreferrer'>whitepaper</a>.

## sync

```solidity
function sync() external;
```

See the <a href='/whitepaper.pdf' target='_blank' rel='noopener noreferrer'>whitepaper</a>.

- Emits [Sync](#sync).

## setMateriaFee

```solidity
function setMateriFee(uint materiaFee) external;
```

Set the Materia fee, must be called by the owner, that is the factory.

## setSwapFee

```solidity
function sync() external;
```

Set the swap fee, must be called by the owner, that is the factory.


# Interface

```solidity
pragma solidity >=0.5.0;

interface IMateriaPair {
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);

    function name() external pure returns (string memory);

    function symbol() external pure returns (string memory);

    function decimals() external pure returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address owner) external view returns (uint256);

    function allowance(address owner, address spender) external view returns (uint256);

    function approve(address spender, uint256 value) external returns (bool);

    function transfer(address to, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);

    function PERMIT_TYPEHASH() external pure returns (bytes32);

    function nonces(address owner) external view returns (uint256);

    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    event Mint(address indexed sender, uint256 amount0, uint256 amount1);
    event Burn(address indexed sender, uint256 amount0, uint256 amount1, address indexed to);
    event Swap(
        address indexed sender,
        uint256 amount0In,
        uint256 amount1In,
        uint256 amount0Out,
        uint256 amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);

    function MINIMUM_LIQUIDITY() external pure returns (uint256);

    function factory() external view returns (address);

    function token0() external view returns (address);

    function token1() external view returns (address);

    function getReserves()
        external
        view
        returns (
            uint112 reserve0,
            uint112 reserve1,
            uint32 blockTimestampLast
        );

    function price0CumulativeLast() external view returns (uint256);

    function price1CumulativeLast() external view returns (uint256);

    function kLast() external view returns (uint256);

    function mint(address to) external returns (uint256 liquidity);

    function burn(address to) external returns (uint256 amount0, uint256 amount1);

    function swap(
        uint256 amount0Out,
        uint256 amount1Out,
        address to,
        bytes calldata data
    ) external;

    function skim(address to) external;

    function sync() external;

    function initialize(
        address,
        address,
        uint256,
        uint256
    ) external;

    function setMateriaFee(uint256 _materiaFee) external;

    function setSwapFee(uint256 _swapFee) external;

    function materiaFee() external view returns (uint256);

    function swapFee() external view returns (uint256);

    function owner() external view returns (address);

    function renounceOwnership() external;

    function transferOwnership(address newOwner) external;
}
```

# ABI

```typescript
import IMateriaPair from '@materia/materia-contracts-core/build/IMateriaPair.json'
```