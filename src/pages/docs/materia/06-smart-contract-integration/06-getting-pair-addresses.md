---
title: Pair Addresses
---

# getPair

The most obvious way to get the address for a pair is to call <Link to='/docs/materia/smart-contracts/factory/#getpair'>getPair</Link> on the factory. If the pair exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pair exists.
- Requires an on-chain lookup.

# CREATE2

Thanks to some [fancy footwork in the factory](https://github.com/materia-dex/materia-contracts-core/blob/master/contracts/MateriaFactory.sol), we can also compute pair addresses _without any on-chain lookups_ because of [CREATE2](https://eips.ethereum.org/EIPS/eip-1014). The following values are required for this technique:

|                        |                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------ |
| `address`              | The <Link to='/docs/materia/smart-contracts/factory/#address'>factory address</Link> |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                                   |
| `keccak256(init_code)` | `0x3a1b8c90f0ece2019085f38a482fb7538bb84471f01b56464ac88dd6bece344e`            |

- `token0` must be strictly less than `token1` by sort order.

* Can be computed offline.
* Requires the ability to perform `keccak256`.

## Examples

### Solidity

```solidity
address factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;

address pair = address(uint(keccak256(abi.encodePacked(
  hex'ff',
  factory,
  keccak256(abi.encodePacked(wusd, item)),
  hex'3a1b8c90f0ece2019085f38a482fb7538bb84471f01b56464ac88dd6bece344e'
))));
```
