---
title: Updating contracts
tags: smart-contracts, documentation, governance
---

# Orchestrator

The steps to update the orchestrator are:

1. Deploy the new orchestrator passing the old Materia Operators addresses in the constructor.
2. Call `retire(newOrchestrator)` of the old orchestrator, now the materia operators (liquidity adder, liquidity remover and swapper) can only be used by the new orchestator.

## Code example

```solidity
function callOneTime(address) public {
  address oldMateriaOrchestrator = <oldMateriaOrchestrator>; //possibly with correct references to the old Materia operators
  address newMateriaOrchestrator = <newMateriaOrchestrator>; //must be already deployed with a correct reference to the DFO double proxy

  IMateriaOrchestrator(oldMateriaOrchestrator).retire(newMateriaOrchestrator);
}
```

# Materia operators

The steps to update an operator (like the liquidity adder, the liquidity remover or the swapper) are:

1. Deploy the new operator passing the orchestrator to the constructor.
2. Call `setSwapper(newSwapper)`.

## Code example 

```solidity
function callOneTime(address) public {
  IMVDProxy dfoProxy = IMVDProxy(msg.sender);
  address materiaOrchestrator = <materiaOrchestrator>;
  address newSwapper = <newSwapper>; //e.g. a new swapper
  
  IMateriaOrchestrator(materiaOrchestrator).setSwapper(newSwapper);
}

interface IMateriaOrchestrator {
  function setSwapper(address newSwapper) external;
}
```

# DFO double proxy

The steps to update the DFO double proxy are:

1. Deploy the new double proxy
2. Set the new double proxy address in all the contracts that implement the `byDFO` modifier, this step is very important, an oversight here can lead to fatal consequences where the DFO loses control over a contract.
3. Set the new double proxy in the DFO proxy.

## Code example 

```solidity
function callOneTime(address) public {
  IMVDProxy dfoProxy = IMVDProxy(msg.sender);
  address newDoubleProxy = <newDoubleProxy>;

  materiaOrchestrator.setDobuleProxy(newDoubleProxy);
  
  dfoProxy.setDoubleProxy(newDoubleProxy);
  
  // May be convenient to check if the contracts now know the new double proxy
  require(materiaOrchestrator.doubleProxy() == dfoProxy.doubleProxy(), "Wrong doubleProxy");
}
```