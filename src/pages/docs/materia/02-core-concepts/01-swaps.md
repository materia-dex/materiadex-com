---
title: Swaps
subtitle: Learn about the core functionality of the Materia protocol. Token Swaps.
tags: swaps, documentation
---

![](/images/swap.jpg)

# Introduction

Token swaps in Materia are a way to trade one token for another, you will be able to exchange [ITEMs](https://ethitem.com/) ERC20 interoperable. 

For end-users, swapping is intuitive: a user picks an input token and an output token. They specify an input amount, and the protocol calculates how much of the output token they’ll receive. They then execute the swap with one click, receiving the output token in their wallet immediately.

While swapping you will be able to see the tipology of the your tokens (ERC20 or ITEMs) and behave accordingy. ERC20 Tokens will have a higher swap fee price due to the need of wrapping them into ITEMs. As stated in the [Protocol Overview](/docs/materia/protocol-overview), every pair in Materia is actually composed of an ITEM (its ERC20 Interoperable reperesentation precisely) and WUSD.

In this guide, we’ll look at what happens during a swap at the protocol level in order to gain a deeper understanding of how Materia works.

Swaps in Materia are different from trades on traditional platforms. Materia does not use an order book to represent liquidity or determine prices. Materia uses an automated market maker mechanism to provide instant feedback on rates and slippage.

As we learned in [Protocol Overview](/docs/materia/protocol-overview), each pair on Materia is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them.

This rule is the [constant product formula](/docs/materia/protocol-overview/glossary#constant-product-formula). When either token is withdrawn (purchased), a proportional amount of the other must be deposited (sold), in order to maintain the constant.

## Anatomy of a swap

At the most basic level, all swaps in Materia happen within a single function, aptly named `swap`:

```solidity
function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data);
```

# Receiving tokens

As is probably clear from the function signature, Materia requires `swap` callers to _specify how many output tokens they would like to receive_ via the `amount{0,1}Out` parameters, which correspond to the desired amount of `token{0,1}`.

# Sending Tokens

What’s not as clear is how Materia _receives_ tokens as payment for the swap. Typically, smart contracts which need tokens to perform some functionality require callers to first make an approval on the token contract, then call a function that in turn calls transferFrom on the token contract. This is _not_ how pairs accept tokens. Instead, pairs check their token balances at the _end_ of every interaction. Then, at the beginning of the _next_ interaction, current balances are differenced against the stored values to determine the amount of tokens that were sent by the current interactor. 

The takeaway is that **tokens must be transferred to pairs before swap is called** (the one exception to this rule is <Link to='/docs/materia/core-concepts/flash-swaps'>Flash Swaps</Link>). This means that to safely use the `swap` function, it must be called from _another smart contract_. The alternative (transferring tokens to the pair and then calling `swap`) is not safe to do non-atomically because the sent tokens would be vulnerable to arbitrage.

# Developer resources

- To see how to implement token swaps in a smart contract read [Trading from a smart contract](/docs/materia/smart-contract-integration/trading-from-a-smart-contract/).
- To see how to execute a swap from an interface read [Trading (SDK)](/docs/materia/javascript-SDK/trading/)
