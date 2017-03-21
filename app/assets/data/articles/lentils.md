---
title: Lentils Summary
date: 3/20/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - lent
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - lent
 - pulses
 - baseline
---
Summary of IMPACT model outputs for lentils

```chart
mark: line
title: Lentils Impact Parameters over time
width: 50%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: lent
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Lentils Impact Parameters from 2015 - 2050 (%)
width: 50%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: lent
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Lentils IMPACT Parameters from 2015 - 2050 (%)
fixed:
  commodity: lent
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```