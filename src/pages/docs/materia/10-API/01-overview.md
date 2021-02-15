---
title: API Overview
tags: api, documentation
---

This section explains the Materia Subgraph and how to interact with it. The Materia subgraph indexes data from the Materia contracts over time. It organizes data about pairs, tokens, Materia as a whole, and more. The subgraph updates any time a transaction is made on Materia. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/Materia/Materia-v2) - sandbox for querying data and endpoints for developers.

[Materia Subgraph](https://github.com/materia-dex/Materia-v2-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Materia and also tracks historical data. It is currently used to power [Materia.info](https://Materia.info/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [Materia Subgraph](https://thegraph.com/explorer/subgraph/Materia/Materia-v2) only tracks data on Materia. For Materia V1 information see the [V1 Subgraph](https://thegraph.com/explorer/subgraph/graphprotocol/Materia).
