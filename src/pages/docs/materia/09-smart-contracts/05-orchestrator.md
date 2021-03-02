---
title: Orchestrator
tags: smart-contracts, documentation
---

# Code

[`MateriaOrchestrator.sol`](https://github.com/materia-dex/materia-contracts-proxy/blob/master/contracts/MateriaOrchestrator.sol)

# Address

`MateriaOrchestrator` is deployed at `0xB0F720Baa5BD1715897d4790A59f5c7aa1377D79` on the Ethereum [mainnet](https://etherscan.io/address/0xB0F720Baa5BD1715897d4790A59f5c7aa1377D79) and the [Ropsten](https://ropsten.etherscan.io/address/0xB0F720Baa5BD1715897d4790A59f5c7aa1377D79) testnet. 
It was built from commit tagged as `depoloy`.
Indeed, this contract is mainly a proxy, the real instructions to perform the various operations are inside these three operators:

- `MateriaLiquidityAdder` is deployed at `0xA85844DD423cdB2b6beA603e1768f9587d662aB8` on the Ethereum [mainnet](https://etherscan.io/address/0xA85844DD423cdB2b6beA603e1768f9587d662aB8) and the [Ropsten](https://ropsten.etherscan.io/address/0xA85844DD423cdB2b6beA603e1768f9587d662aB8) testnet. 
- `MateriaLiquidityRemover` is deployed at `0x331f3DBCC3b65B4A401a248aD7ae2A6098621a70` on the Ethereum [mainnet](https://etherscan.io/address/0x331f3DBCC3b65B4A401a248aD7ae2A6098621a70) and the [Ropsten](https://ropsten.etherscan.io/address/0x331f3DBCC3b65B4A401a248aD7ae2A6098621a70) testnet. 
- `MateriaSwapper` is deployed at `0xF644DD45c854BeD5924E95Eb0aB68E38d5BE66da` on the Ethereum [mainnet](https://etherscan.io/address/0xF644DD45c854BeD5924E95Eb0aB68E38d5BE66da) and the [Ropsten](https://ropsten.etherscan.io/address/0xF644DD45c854BeD5924E95Eb0aB68E38d5BE66da) testnet. 

This way it's possible to update a component without redeploy all the contracts, obviously these operations must be performed by DFO with a proposal.
Another advantage is that, even if an operator is updated, the uses does not need to make a new `approve` call.

# Read-Only Functions

## factory

```solidity
function factory() external pure returns (address);
```

Returns <Link to='/docs/materia/smart-contracts/factory/#address'>factory address</Link>.

## doubleProxy

```solidity
function doubleProxy() external returns(address);
```

Returns the DFO's double proxy.

## swapper

```solidity
function swapper() external returns(address);
```

Returns the Swapper operator.

## liquidityAdder

```solidity
function liquidityAdder() external returns(address);
```

Returns the liquidity adder operator.

## liquidityRemover

```solidity
function liquidityRemover() external returns(address);
```

Returns the liquidity remover operator.

## erc20Wrapper

```solidity
function erc20Wrapper() external returns(address);
```

Returns the EthItem ERC20Wrapper.

## bridgeToken

```solidity
function bridgeToken() external returns(address);
```

Returns WUSD address as ERC20 interoperable.

## ETHEREUM_OBJECT_ID

```solidity
function ETHEREUM_OBJECT_ID() external returns(uint);
```

Returns IEth object id in the ERC20Wrapper collection.

# isEthItem

```solidity
function isEthItem(address token) external returns(address collection, bool ethItem, uint itemId);
```

Check if token address is an EthItem, eventually returning its collection address and item id.

## quote

See <Link to='/docs/materia/smart-contracts/library#quote'>quote</Link>.

## getAmountOut

See <Link to='/docs/materia/smart-contracts/library#getamountout'>getAmountOut</Link>.

## getAmountIn

See <Link to='/docs/materia/smart-contracts/library#getamountin'>getAmountIn</Link>.

## getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);
```

See <Link to='/docs/materia/smart-contracts/library#getamountsout'>getAmountsOut</Link>.

## getAmountsIn

```solidity
function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts);
```

See <Link to='/docs/materia/smart-contracts/library#getamountsin'>getAmountsIn</Link>.

# State-Changing Functions

## setDoubleProxy

```solidity
function setDoubleProxy(address doubleProxy) external;
```

Set the DFO's double proxy.

## swapper

```solidity
function setSwapper(address swapper) external;
```

Set the Swapper operator.

## liquidityAdder

```solidity
function liquidityAdder(address liquidityAdder) external;
```

Set the liquidity adder operator.

## liquidityRemover

```solidity
function setLiquidityRemover(address liquidityRemover) external;
```

Set the liquidity remover operator.

## setErc20Wrapper

```solidity
function setErc20Wrapper(address erc20Wrapper) external;
```

Set the EthItem ERC20Wrapper.

## bridgeToken

```solidity
function setBridgeToken(address bridgeToken) external;
```

Set WUSD address as ERC20 interoperable.

## ETHEREUM_OBJECT_ID

```solidity
function setEthereumObjectId(uint id) external;
```

## addLiquidity

```solidity
function addLiquidity(
    address token,
    uint256 tokenAmountDesired,
    uint256 bridgeAmountDesired,
    uint256 tokenAmountMin,
    uint256 bridgeAmountMin,
    address to,
    uint256 deadline
) external returns (uint amountToken, uint amountETH, uint liquidity);
```

Add liquidity to a WUSD-token pair, wrapping if necessary. 

## addLiquidityETH

```solidity
function addLiquidityETH(
    uint256 bridgeAmountDesired,
    uint256 EthAmountMin,
    uint256 bridgeAmountMin,
    address to,
    uint256 deadline
) external payable;
```                                 

Add liquidity to a WUSD-IETH pair, wrapping ETH into IETH. 

## removeLiquidity

```solidity
function removeLiquidity(
    address token,
    uint256 liquidity,
    uint256 tokenAmountMin,
    uint256 bridgeAmountMin,
    address to,
    uint256 deadline
) external;
```

Burn the specific MPs getting back the assets underlying the pair.

## removeLiquidityETH

```solidity
function removeLiquidityETH(
    uint256 liquidity,
    uint256 bridgeAmountMin,
    uint256 EthAmountMin,
    address to,
    uint256 deadline
) external;
```

Burn the MP getting back the tokens underlying the pair, automatically unwrap IETH into ETH.

## removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(
    address token,
    uint256 liquidity,
    uint256 tokenAmountMin,
    uint256 bridgeAmountMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
) external;
```

Same as `removeLiquidity` but does not require a preceding `approve` since it uses the `permit` functionality of the MPs.

## removeLiquidityETHWithPermit

```solidity
function removeLiquidityETHWithPermit(
    uint256 liquidity,
    uint256 tokenAmountMin,
    uint256 bridgeAmountMin,
    address to,
    uint256 deadline,
    bool approveMax,
    uint8 v,
    bytes32 r,
    bytes32 s
) external;
```

Same as `removeLiquidityETH` but does not require a preceding `approve` since it uses the `permit` functionality of the MPs.

## swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] memory path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts)
```

Swap an exact amount of tokens for a minimum amount of tokens, automatically manages the wrap/unwrap.

## swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(
    uint256 amountOut,
    uint256 amountInMax,
    address[] memory path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts)
```

Swap an amount (specifying the maximum) of tokens for an exact amount of tokens, automatically manages the wrap/unwrap.

## swapExactETHForTokens

```solidity
    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] memory path,
        address to,
        uint256 deadline
) external returns (uint256[] memory amounts)
```

Swap an exact amount of ETH for a minimum amount of tokens, automatically manages the wrap/unwrap.

## swapTokensForExactETH

```solidity
function swapTokensForExactETH(
    uint256 amountOut,
    uint256 amountInMax,
    address[] memory path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts)
```

Swap an amount (specifying the maximum) of tokens for an exact amount of ETH, automatically manages the wrap/unwrap.

## swapExactTokensForTokens

```solidity
function swapExactTokensForETH(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] memory path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts)
```

Swap an exact amount of tokens for a minimum amount of ETH, automatically manages the wrap/unwrap.

## swapETHForExactTokens

```solidity
function swapETHForExactTokens(
    uint256 amountOut,
    address[] memory path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts)
```

Swap an amount (specifying the maximum) of ETH for an exact amount of tokens, automatically manages the wrap/unwrap.

# As ERC1155 receiver

Moreover the Materia orchestrator behaves as an ERC1155 receiver, this means that if you send an ERC1155 token to it specifying a payload you can trigger a callback function.
This is used to avoid unnecessary `approve` when managing items.

Currently there are 5 possible operations identified specific ids and payloads:

- `1` is for adding liquidity (item/wusd)
- `2` is for swapping an exact amount of items for tokens
- `3` is for swapping items for an exact amount of tokens
- `4` is for swapping an exact amount of items for ETH
- `5` is for swapping items for an exact amount of ETH


```solidity
import '@materia/materia-contracts-proxy/contracts/interfaces/IMateriaOrchestrator.sol';
```

```solidity
interface IMateriaOrchestrator is IERC1155Receiver {
    function setDoubleProxy(address newDoubleProxy) external;

    function setBridgeToken(address newBridgeToken) external;

    function setErc20Wrapper(address newErc20Wrapper) external;

    function setFactory(address newFactory) external;

    function setEthereumObjectId(uint256 newEthereumObjectId) external;

    function setSwapper(address _swapper) external;

    function setLiquidityAdder(address _adder) external;

    function setLiquidityRemover(address _remover) external;

    function retire(address newOrchestrator) external;

    function setFees(
        address token,
        uint256 materiaFee,
        uint256 swapFee
    ) external;

    function setDefaultFees(uint256 materiaFee, uint256 swapFee) external;

    function setFeeTo(address feeTo) external;

    function getCrumbs(
        address token,
        uint256 amount,
        address receiver
    ) external;

    function factory() external view returns (IMateriaFactory);

    function bridgeToken() external view returns (IERC20);

    function erc20Wrapper() external view returns (IERC20WrapperV1);

    function ETHEREUM_OBJECT_ID() external view returns (uint256);

    function swapper() external view returns (address);

    function liquidityAdder() external view returns (address);

    function liquidityRemover() external view returns (address);

    function doubleProxy() external view returns (IDoubleProxy);

    //Liquidity adding

    function addLiquidity(
        address token,
        uint256 tokenAmountDesired,
        uint256 bridgeAmountDesired,
        uint256 tokenAmountMin,
        uint256 bridgeAmountMin,
        address to,
        uint256 deadline
    )
        external
        returns (
            uint256 amountA,
            uint256 amountB,
            uint256 liquidity
        );

    function addLiquidityETH(
        uint256 bridgeAmountDesired,
        uint256 EthAmountMin,
        uint256 bridgeAmountMin,
        address to,
        uint256 deadline
    )
        external
        payable
        returns (
            uint256 amountToken,
            uint256 amountETH,
            uint256 liquidity
        );

    //Liquidity removing

    function removeLiquidity(
        address token,
        uint256 liquidity,
        uint256 tokenAmountMin,
        uint256 bridgeAmountMin,
        address to,
        uint256 deadline
    ) external;

    function removeLiquidityETH(
        uint256 liquidity,
        uint256 bridgeAmountMin,
        uint256 EthAmountMin,
        address to,
        uint256 deadline
    ) external;

    function removeLiquidityWithPermit(
        address token,
        uint256 liquidity,
        uint256 tokenAmountMin,
        uint256 bridgeAmountMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    function removeLiquidityETHWithPermit(
        uint256 liquidity,
        uint256 ethAmountMin,
        uint256 bridgeAmountMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    //Swapping

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] memory path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 amountInMax,
        address[] memory path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] memory path,
        address to,
        uint256 deadline
    ) external payable;

    function swapTokensForExactETH(
        uint256 amountOut,
        uint256 amountInMax,
        address[] memory path,
        address to,
        uint256 deadline
    ) external;

    function swapExactTokensForETH(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] memory path,
        address to,
        uint256 deadline
    ) external;

    function swapETHForExactTokens(
        uint256 amountOut,
        address[] memory path,
        address to,
        uint256 deadline
    ) external payable;

    //Materia utilities

    function isEthItem(address token)
        external
        view
        returns (
            address collection,
            bool ethItem,
            uint256 itemId
        );

    function quote(
        uint256 amountA,
        uint256 reserveA,
        uint256 reserveB
    ) external pure returns (uint256 amountB);

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountOut);

    function getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountIn);

    function getAmountsOut(uint256 amountIn, address[] memory path) external view returns (uint256[] memory amounts);

    function getAmountsIn(uint256 amountOut, address[] memory path) external view returns (uint256[] memory amounts);
}
```

# ABI

```typescript
import IMateriaOrchestrator from '@materia/materia-contracts-proxy/build/IMateriaOrchestrator.json'
```
