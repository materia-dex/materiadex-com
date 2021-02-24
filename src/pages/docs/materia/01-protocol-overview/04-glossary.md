---
title: Glossary
tags: protocol-overview, documentation
---

### Automated market maker

An automated market maker is a smart contract on Ethereum that holds on-chain liquidity reserves. Users can trade against these reserves at prices set by an automated market making formula.

### Constant product formula

The automated market making algorithm used by Materia.
See [x\*y=k](#x--y--k).

### ERC20

ERC20 tokens are fungibile tokens on Ethereum. Materia supports all standard ERC20 implementations.

### Factory

A smart contract that deploys a unique smart contract for any ERC20/ERC20 trading pair.

### Pair

A smart contract deployed from the Materia Factory that enables trading between two ERC20 tokens.

### Pool

Liquidity within a pair is pooled across all liquidity providers.

### Liquidity provider / LP

A liquidity provider is someone who deposits an equivalent value of two ERC20 tokens into the liquidity pool within a pair. Liquidity providers take on price risk and are compensated with fees.

### Mid price

The price between what users can buy and sell tokens at, at a given moment. In Materia this is the ratio of the two ERC20 token reserves.

### Price impact

The difference between the mid-price and the execution price of a trade.

### Slippage

The amount the price moves in a trading pair between when a transaction is submitted and when it is executed.

### Core

Smart contracts that are essential for Materia to exist. Upgrading to a new version of core would require a liquidity migration.

### Orchestrator

External smart contract (actually more than one) used to interact with the factory and the pairs by the interface. It's the main entry point to the Materia ecosystem and it's used to change the protocol paramethers by the DFO.

### Flash swap

A trade that uses the tokens being purchased before paying for them.

### `x * y = k`

The constant product formula.

### Invariant

The "k" value in the constant product formula

### DFO

Decentralized Flexible Organization