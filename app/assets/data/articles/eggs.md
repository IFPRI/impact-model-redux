---
title: Eggs Summary
date: 3/20/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - eggs
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - eggs
 - animal_products
 - baseline
---
Summary of IMPACT model outputs for eggs

```chart
mark: line
title: Eggs Impact Parameters over time
width: 50%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: eggs
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Eggs Impact Parameters from 2015 - 2050 (%)
width: 50%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: eggs
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Eggs IMPACT Parameters from 2015 - 2050 (%)
fixed:
  commodity: eggs
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```