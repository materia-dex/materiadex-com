---
title: Smart contracts
tags: protocol-overview, documentation
---

Materia is a binary smart contract system. [Core](#core) contracts provide fundamental safety guarantees for all parties interacting with Materia. [Orchestrator](#orchestrator) contracts interact with one or more core contracts but are not themselves part of the core.

# Core

[Source code](https://github.com/materia-dex/materia-contracts-factory)

The core consists of a singleton [factory](#factory) and many [pairs](#pairs), which the factory is responsible for creating and indexing. These contracts are quite minimal, even brutalist. The simple rationale for this is that contracts with a smaller surface area are easier to reason about, less bug-prone, and more functionally elegant. Perhaps the biggest upside of this design is that many desired properties of the system can be asserted directly in the code, leaving little room for error. One downside, however, is that core contracts are somewhat user-unfriendly. In fact, interacting directly with these contracts is not recommended for most use cases. For example, the Materia interface uses the [Orchestrator](#orchestrator) to interact with the pairs and the factory.

## Factory

<Link to='/docs/materia/smart-contracts/factory'>Reference documentation</Link>

The factory holds the generic bytecode responsible for powering pairs. Its primary job is to create one and only one smart contract per unique token pair. It also contains logic to turn on the protocol charge i.e. it can activate an extra fee (called "Materia fee") and set this fee and the traditional swap fee per single pair.
To achieve this, the factory has an owner, currently the orchestrator used by the interface which is the only allowed to enable or changes these fees.

Furthermore, it is important to mention that the factory technically would allow the creation of pairs of arbitrary tokens, and the choice of using only the bridge token is implemented by the owner, which is the only that can call the method to create new pairs. This is as strategic choice with the purpose to avoid the necessity to redeploy the factory in the case of a bridge token change (or even just an update). 

## Pairs

<Link to='/docs/materia/smart-contracts/pair'>Reference documentation</Link>
<br />
<Link to='/docs/materia/smart-contracts/pair-erc-20'>Reference documentation (ERC-20)</Link>

Pairs have two primary purposes: serving as automated market makers and keeping track of pool token balances. They also expose data which can be used to build decentralized price oracles.
Moreover, as the factory, even the pairs have an owner, that this time it is the factory itself. This allows the factory to be the only which can set che specific fees for the pair.

# Orchestrator

[Source code](https://github.com/materia-dex/materia-contracts-proxy)

The orchestrator is the main entry point of the Materia ecosystem, it's used by the interface to communicate with the factory and the pairs and it's used by the DFO (through proposals) to change the fees or update its components. Because of Materia's core permissionless nature, the contracts described below have no special trading privileges, and are in fact only a small subset of the universe of possible contracts. However, they are useful examples of how to safely and efficiently interact with Materia.

The orchestrator contract is a proxy which forwards the calls to three different and specific components, called operators:

## Liquidity adder

[Source code](https://github.com/materia-dex/materia-contracts-proxy)

The liquidity adder allows the users to add new liquidity, possibly managing the automatic wrap and deploying a new pair.
In the case the user is adding native items the calls are done using the ERC1155 callback functionality.

Remember that all the pairs are between the WUSD token and an EthItem, even if the user provides a traditional ERC20 as liquidity.
The wrapping is automatic.


## Liquidity remover

[Source code](https://github.com/materia-dex/materia-contracts-proxy)

Just as the liquidity adder, the liquidity remover does the exact inverse. It does not require the approval since the MP liquidity toknes implements the `permit` functionality.
Note that, at the moment, the LPs can remove their liquidity only in the form of WUSD and EthItem, if the want get the underlying asset they must
do a an unwrap in a consequent transaction.

## Swapper

[Source code](https://github.com/materia-dex/materia-contracts-orchestrator)

The swapper implements the methods to swap the tokens, no routing is required since the all the pairs have a token in common. For the same reason the number of "hops" during the swap is at most 2.
Several methods are implemented here, to satisfy all the use cases, each with different gas costs, depending on things like the number of hops or the presence of the wrap and the unwrap operations.


This subdivions allows simpler (and cheaper) upgrades while without forcing traders to reapprove their tokens at every update, obviously if the orchestrator gets replaced new approvals are still required.

## Library

<Link to='/docs/materia/smart-contracts/library'>Reference documentation</Link>

The library provides a variety of convenience functions for fetching data and pricing.
