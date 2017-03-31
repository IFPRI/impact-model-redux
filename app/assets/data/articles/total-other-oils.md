---
title: Total Other Oils Summary
date: 3/30/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - tool
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - tool
 - food_oils
 - baseline
---
Summary of IMPACT model outputs for total other oils

```chart
mark: line
title: Total Other Oils Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: tool
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```chart
mark: bar
title: Change in Total Other Oils Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: tool
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```chart
mark: stripe
title: Total Other Oils Impact Parameters over time
width: 50%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: tool
scenarios: ssp2_gfdl, ssp2_hgem
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
```

```map
title: Change in Total Other Oils IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
fixed:
  commodity: tool
```