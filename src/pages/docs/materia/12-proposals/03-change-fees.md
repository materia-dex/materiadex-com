---
title: Change fees
tags: smart-contracts, documentation, governance
---

# Change fees

There are two settable fees in the Materia protocol:
- *Swap fee* is the fee that trader pays per hop (a swap can only make one or two hops), and the deafult value is 30 basis points (0.3%)
- *Materia fee* is the part of *swap fee* that goes to the Materia DFO (the receiver is `feeTo`), the default value is 1/6.

## Code example

This example change the `swap fee` and the `Materia fee` for the pair WuSD-DAI.

```solidity
function callOneTime(address) public {
  IMVDProxy dfoProxy = IMVDProxy(msg.sender);
  address daiToken = <daiAddress>;
  uint materiaFee = <materiaFee>;
  uint swapFee = <swapFee>;

  materiaOrchestrator.setFees(
    tokenDai,
    materiaFee,
    swapFee,
  ); 
}
```

# Change default fees

It's also possible to set the default *swap fee* and *Materia fee* i.e. the fees that are automatically set when the Materia Factory deploy a new pair.

## Code example

