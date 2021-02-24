---
title: Fees
tags: protocol-overview, documentation
---

## Liquidity provider fees

There is a **0.3%** fee for swapping tokens. **This fee is split by liquidity providers proportional to their contribution to liquidity reserves.**

This fee however could be changed for each pair via a Governance Proposal, more information can be found in the [Change Fees](/docs/materia/proposals/change-fees/) proposal information.

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool. Fees are collected by burning liquidity tokens to remove a proportional share of the underlying reserves.

Since fees are added to liquidity pools, the invariant increases at the end of every trade. Within a single transaction, the invariant represents `wusd / item` at the end of the previous transaction.

There are many community-developed tools to determine returns. You can also read more in the docs about how to think about [MP returns](/docs/materia/advanced-topics/understanding-returns/).

## Protocol Fees

At the moment there are pairs with the protocol fees (also called Materia Fee). However, it is possible, by proposal, for a custom fee to be turned on for a single pair. Note that, even if the Materia fee is completely editable by the DFO, the total swap


