---
title: Groundnuts Summary
date: 3/20/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - grnd
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - grnd
 - oils_seeds
 - baseline
---
Summary of IMPACT model outputs for groundnuts

```chart
mark: line
title: Groundnuts Impact Parameters over time
width: 50%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: grnd
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Groundnuts Impact Parameters from 2015 - 2050 (%)
width: 50%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: grnd
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Groundnuts IMPACT Parameters from 2015 - 2050 (%)
fixed:
  commodity: grnd
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```