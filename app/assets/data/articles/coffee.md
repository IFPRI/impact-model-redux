---
title: Coffee Summary
date: 3/20/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - cafe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - cafe
 - other
 - baseline
---
Summary of IMPACT model outputs for coffee

```chart
mark: line
title: Coffee Impact Parameters over time
width: 50%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cafe
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Coffee Impact Parameters from 2015 - 2050 (%)
width: 50%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cafe
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Coffee IMPACT Parameters from 2015 - 2050 (%)
fixed:
  commodity: cafe
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```