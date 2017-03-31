---
title: Pasture Summary
date: 3/21/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - pstr
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - pstr
 - other
 - baseline
---
Summary of IMPACT model outputs for pasture

```chart
mark: line
title: Pasture Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: pstr
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Pasture Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: pstr
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Pasture IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
fixed:
  commodity: pstr
```