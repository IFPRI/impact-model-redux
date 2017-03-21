---
title: Total Other Oilseeds Summary
date: 3/20/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - tols
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - tols
 - oils_seeds
 - baseline
---
Summary of IMPACT model outputs for total other oilseeds

```chart
mark: line
title: Total Other Oilseeds Impact Parameters over time
width: 50%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: tols
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Total Other Oilseeds Impact Parameters from 2015 - 2050 (%)
width: 50%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: tols
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Total Other Oilseeds IMPACT Parameters from 2015 - 2050 (%)
fixed:
  commodity: tols
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```