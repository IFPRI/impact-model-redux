---
title: Oil Palm Fruit Summary
date: 3/21/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - palm
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - palm
 - oils_seeds
 - baseline
---
Summary of IMPACT model outputs for oil palm fruit

```chart
mark: line
title: Oil Palm Fruit Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: palm
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Oil Palm Fruit Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: palm
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in Oil Palm Fruit IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
fixed:
  commodity: palm
```