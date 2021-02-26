---
title: Factory
tags: smart-contracts, documentation
---

# Code

[`MateriaFactory.sol`](https://github.com/materia-dex/materia-contracts-core/blob/master/contracts/MateriaFactory.sol)

# Address

`MateriaFactory` is deployed at `0xb498a69ff7b9a73c58491d564fc6a462b259c860` on the Ethereum [mainnet](https://etherscan.io/address/0xb498a69ff7b9a73c58491d564fc6a462b259c860) and the [Ropsten](https://ropsten.etherscan.io/address/0xb498a69ff7b9a73c58491d564fc6a462b259c860) testnet. 
It was built from commit tagged as `depoloy`.

# Events

## PairCreated

```solidity
event PairCreated(address indexed token0, address indexed token1, address pair, uint);
```

Emitted each time a pair is created via [createPair](#createpair).

- `token0` is guaranteed to be strictly less than `token1` by sort order.
- The final `uint` log value will be `1` for the first pair created, `2` for the second, etc. (see [allPairs](#allpairs)/[getPair](#getpair)).

# Read-Only Functions

## getPair

```solidity
function getPair(address tokenA, address tokenB) external view returns (address pair);
```

Returns the address of the pair for `tokenA` and `tokenB`, if it has been created, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- `tokenA` and `tokenB` are interchangeable.
- Pair addresses can also be calculated deterministically, see <Link to='/docs/materia/javascript-SDK/getting-pair-addresses/'>Pair Addresses</Link>.

## allPairs

```solidity
function allPairs(uint) external view returns (address pair);
```

Returns the address of the `n`th pair (`0`-indexed) created through the factory, or `address(0)` (`0x0000000000000000000000000000000000000000`) if not enough pairs have been created yet.

- Pass `0` for the address of the first pair created, `1` for the second, etc.

## allPairsLength

```solidity
function allPairsLength() external view returns (uint);
```

Returns the total number of pairs created through the factory so far.

## feeTo

```solidity
function feeTo() external view returns (address);
```

Returns the receiver of the Materia fee, if disabled it returns the zero address.
See <Link to='/docs/materia/advanced-topics/fees/#protocol-charge-calculation'>Protocol Charge Calculation</Link>.

## defaultMateriaFee

```solidity
function defaultMateriaFee() external view returns (uint);
```

Returns the default Materia fee i.e. the initial Materia Fee for new pairs.

## defaultSwapFee

```solidity
function defaultSwapFee() external view returns (uint);
```

Returns the default swap fee i.e. the initial swap Fee for new pairs.

## owner

```solidity
function owner() external view returns (address);
```

Returns the owner, currently this is the orchestrator.

# State-Changing Functions

## createPair

```solidity
function createPair(address tokenA, address tokenB) external returns (address pair);
```

Creates a pair for `tokenA` and `tokenB` if one doesn't exist already.

- `tokenA` and `tokenB` are interchangeable.
- Emits [PairCreated](#paircreated).

Can be called only by the owner.

##setDefaultMateriaFee

```solidity
function setDefaultMateriaFee(uint256 _defaultMateriaFee) external;s
```

Set the deafult new Materia fee for new pairs, must be called by the owner.

##setDefaultSwapFee

```solidity
function setDefaultMateriaFee(uint256 _defaultMateriaFee) external;s
```

Set the deafult new swap fee for new pairs, must be called by the owner.

##setFees

```solidity
function setFees(address pair, uint256 materiaFee, uint256 swapFee) external;
```

Set the fees for a specific pair, must be called by the owner.

# Interface

```solidity
import '@materia/materia-constracts-core/contracts/interfaces/IMateriaFactory.sol';
```

```solidity
interface IMateriaFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint256);

    function feeTo() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);

    function allPairs(uint256) external view returns (address pair);

    function allPairsLength() external view returns (uint256);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;

    function setDefaultMateriaFee(uint256) external;

    function setDefaultSwapFee(uint256) external;

    function transferOwnership(address newOwner) external;

    function setFees(
        address,
        uint256,
        uint256
    ) external;

    function owner() external view returns (address);
}
```

# ABI

```typescript
import IMateriaFactory from '@materia/materia-contracts-core/build/IMateriaFactory.json'
```