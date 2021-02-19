---
title: Custom Linking
tags: frontend integration, documentation
---

# Query Parameters

The Materia front-end supports URL query parameters to allow for custom linking to the Materia frontend. Users and developers can use these query parameters to link to the Materia frontend with custom prefilled settings.

Each Page has specific available URL parameters that can be set. Global parameters can be used on all pages.

A parameter used on an incorrect page will have no effect on frontend settings. Parameters not set with a URL parameter will be set to standard frontend defaults.

## Global

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| theme     | `String` | Sets them to dark or light mode. |

### Theme Options

Theme can be set as `light` or `dark`.

### Example Usage

`https://materia.exchange/#/swap?theme=dark`

## Swap Page

| Parameter      | Type             | Description                                                            |
| :------------- | :--------------- | :--------------------------------------------------------------------- |
| inputCurrency  | `address`        | Input currency that will be swapped for output currency.               |
| outputCurrency | `address or ETH` | Output currency that input currency will be swapped for.               |
| exactAmount    | `number`         | The custom token amount to buy or sell.                                |
| exactField     | `string`         | The field to set custom token amount for. Must be `input` or `output`. |

### Defaults

WUSD defaults as the input currency. When a different token is selected for either input or output WUSD will default as the opposite selected currency.

### Constraints

Addresses must be valid ERC20 addresses. Slippage and amount values must be valid numbers accepted by the frontend \(or error will prevent from swapping\). Slippage can be 0, or within the range 10-&gt;9999 bips \(which converts to 0%, 0.01%-&gt;99%\)

When selecting WUSD as the output currency a user must also choose an inputCurrency that is not WUSD \(to prevent WUSD being populated in both fields\)

### Setting Amounts

Two parameters, exactField and exactAmount can be used to set specific token amounts to be sold or bought. Both fields must be set in the URL or there will be no effect on the settings.

### Example Usage

`https://materia.exchange/#/swap?exactField=input&exactAmount=10&inputCurrency=0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8&outputCurrency=ETH`

## Pool Page

The Pool page is made up of 2 subroutes: `add`, `remove`.

### Add Liquidity

| Parameter | Type      | Description                                                                          |
| :-------- | :-------- | :----------------------------------------------------------------------------------- |
| token0    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |
| token1    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |

Note that if one of the two tokens isn't WUSD, the token0 attribute is updated with WUSD address. This behavior is present because in Materia all the pairs are bonded to the WUSD bridge token.
### Example Usage

`https://materia.exchange/#/add/0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8/ETH`

## Remove Liquidity

| Parameter | Type      | Description                                                                          |
| :-------- | :-------- | :----------------------------------------------------------------------------------- |
| token0    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |
| token1    | `address` | Pool to withdraw liquidity from. \(Must be an ERC20 address with an existing token\) |

Note that in Materia every pair contains the bridge token and an EthItem. If the provided token0 and token1 parameters don't match this rule no pool is found. 

### Example Usage

`https://materia.exchange/#/remove/0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8/0x1D6316dbbE18b6E9B75AE064aA114FE7dC208eDC`
