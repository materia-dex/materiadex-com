---
title: EthItem
tags: ethitem, items, documentation
---

![](/images/item.jpg)

## How Materia uses the ITEM Standard

Materia uses the ITEM Standard as the foundation of its core. Pairs within Materia will be composed of WUSD, a super stablecoin which is a native ITEM and generic ITEMs.

While adding liquidity or swapping, if ERC20 tokens are used, they will be automatically wrapped inside ITEMs enabling future developments and the use of ERC1155 features inside Materia.

Taking advantage of the ITEM Standard, Materia will able to grant features such as Batch/Lego Swap, remove the approving transactions the transfer of tokens and awsome new functionalites that will be developed over time.

## How ITEM Standard works

ITEM is a new object standard on top of Ethereum. It synergizes the properties of the three most common interface (ERC20, ERC721, ERC1155) and is thus interoperable with all existing Ethereum applications. By taking advantage of the sophisticated engineering behind ERC1155s, ITEMs can be used as an ERC20, ERC721 or as an ERC1155 as required.

ITEMs don’t need centralized storage to save objectId info. NFT data is saved in a specific ERC20 token that can also work as a standalone one, and allow for the transfer of parts of an atomic object. The ERC20 implementation has a unique Token Id, and its supply is the entire supply of that Token Id.

EthItem is designed to be extendable. Every new Collection can be hosted by a specific wallet, or better yet by a Smart Contract that has the right to mint new Items. This allows all developers to build their own minting rules and create an entire decentralized application based on it in a totally reusable general-purpose way. This is because, for the first time, the application’s logic (e.g. for a videogame) is fully decoupled from the NFT implementation itself.

## Wrapped ITEMs vs Native ITEMs

Native ITEMs are collections objects that, via their Extensions, can perform complex behaviors specified optionally in the Extension logic. These extra capabilities are up to the developers writing the Extension logic.

Wrapped ITEMs, on the other hand, retain all the capabilities of the default ITEM standard, but lose any extra ones while wrapped. For example, once wrapped, A DAO or DFO governance token cannot interact with the DAO or DFO (until unwrapped), but can still be traded like any ITEM using a gas-efficient method like BatchTransfer.

To be clear: Wrapped items CANNOT have Extensions.

## Unique vs fungible ITEMs

![](/images/item-view.png)

For the EthITEM standard, there are two different ways to handle tokens. The first is for tokens with a limited supply of one, the second for tokens with a limited supply of more than one. Let’s say you want to wrap an NFT with a supply of 1. How can we guarantee that the original NFT will still be accessible and function as a unique token, but not be inflated?

The solution is in the way a unique token is wrapped as an ITEM. Once you wrap it, you’ll be able to redeem its underlying assets entirely. ETHITEM stores information on how many of the generated ITEMs have been burnt to redeem the underlying assets. If someone rewraps the unique token, he will obtain the number of tokens burnt in the first place.

## Read more

To read more about EthItem you can check the official [web site](https://ethitem.com/) and the [nerd section](https://ethitem.com/doc.html).


