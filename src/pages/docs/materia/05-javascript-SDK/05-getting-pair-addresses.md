---
title: Pair Addresses
---

# getPair

The most obvious way to get the address for a pair is to call <Link to='/docs/materia/smart-contracts/factory/#getpair'>getPair</Link> on the factory. If the pair exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pair exists.
- Requires an on-chain lookup.

# CREATE2

Thanks to some [fancy footwork in the factory](https://github.com/materia-dex/materia-contracts-core/blob/master/contracts/MateriaFactory.sol#L32), we can also compute pair addresses _without any on-chain lookups_ because of [CREATE2](https://eips.ethereum.org/EIPS/eip-1014). The following values are required for this technique:

|                        |                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------ |
| `address`              | The <Link to='/docs/materia/smart-contracts/factory/#address'>factory address</Link> |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                                   |
| `keccak256(init_code)` | `0x1f7a79205b06500dba4319dace4f587f04d4053be84ea23989b8539885ae65e8`            |

- `token0` must be strictly less than `token1` by sort order.

* Can be computed offline.
* Requires the ability to perform `keccak256`.

## Examples

### TypeScript

This example makes use of the <Link to='docs/materia/SDK/getting-started'>Materia SDK</Link>. In reality, the SDK computes pair addresses behind the scenes, obviating the need to compute them manually like this.

```typescript
import { FACTORY_ADDRESS, INIT_CODE_HASH } from '@materia/sdk'
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'

const token0 = '0xCAFE000000000000000000000000000000000000' // change me!
const WUSD = '0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8'

const pair = getCreate2Address(
  FACTORY_ADDRESS,
  keccak256(['bytes'], [pack(['address', 'address'], [token0, WUSD])]),
  INIT_CODE_HASH
)
```
