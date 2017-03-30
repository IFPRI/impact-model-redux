---
title: Refined Sugar Summary
date: 3/30/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - sugr
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - sugr
 - sugar
 - baseline
---
Summary of IMPACT model outputs for refined sugar

```chart
mark: line
title: Refined Sugar Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: sugr
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Refined Sugar Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: sugr
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```chart
mark: stripe
title: Refined Sugar Impact Parameters over time
width: 50%
encoding:
x:
  type: nominal
  field: year
y:
  type: quantitative
  field: Val
fixed:
commodity: sugr
dropdown:
field: impactparameter
values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
scenarios: ssp2_GFDL, ssp2_hgem
```

```map
title: Change in Refined Sugar IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
fixed:
  commodity: sugr
```