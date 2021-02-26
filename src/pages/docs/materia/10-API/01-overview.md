---
title: API Overview
tags: api, documentation
---

This section explains the Materia Subgraph and how to interact with it. The subgraph indexes data from the Materia contracts over time. It organizes data about pairs, tokens, Materia as a whole, and more. The subgraph updates any time a transaction is made. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/materia-dex/materia) - sandbox for querying data and endpoints for developers.

[Materia V2 Subgraph](https://github.com/materia-dex/materia-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state and also tracks historical data. It is currently used to power [info.materia](https://info.materiadex.com/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).
