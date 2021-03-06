---
title: Overview
tags: smart-contracts, documentation, governance
---

# Introduction

Governance of the Materia protocol is available through the [`DFO Dapp`](https://dapp.dfohub.com/?addr=0xf056aE03Cf991e4587Da458B2c85e9a353684B3a) where Token Holders can vote on proposals to extend the main protocol.

Although the Materia core contracts can be used without limitations and should not be replaced soon, new Materia versions may implement new mechanisms that requires the replacement of some other non-core contracts.
Moreover some contracts allow the adjustment of some specific values of the protocol.

Since Materia is a [`DFO`](https://www.dfohub.com/) (Decentralized Flexible Organizations) the GIL holders can create new proposals and then vote for them.

## What is a proposal

In its essence, a proposal is a smart contract that implements methods with specific signatures.
If the proposal expresses a functionality that can be enabled or disabled then it must implement two methods:

```solidity
function onStart(address, address) public;
function onStop(address) public;
```

Otherwise, if the proposal express a functionality that creates a one time change in the blockchain (called "One time proposal") it must implement this method:

```solidity
function callOneTime(address) public;
```

Please refer to the DfoHub documentation for more information.


# Create a proposal

To create a proposal visit the [`Materia DFO` page](https://dapp.dfohub.com/?addr=0xabc) on DfoHub, select "Governance", then "New Proposal" and follow the wizard.
