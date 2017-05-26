---
title: Aot Eggs Summary
date: 5/26/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - aot-eggs
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - aot-eggs
 - aot
 - baseline
---
Summary of IMPACT model outputs for aot eggs

```chart
mark: line
title: Aot Eggs Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: aot-eggs
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
```

```chart
mark: bar
title: Change in Aot Eggs Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: aot-eggs
  impactparameter: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
```

```chart
mark: stripe
title: Aot Eggs Impact Parameters over time (SSP2_GFDL vs. SSP2_HGEM)
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: aot-eggs
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem, ssp2_ipsl, ssp2_miroc, ssp2_nocc
  shown: ssp2_gfdl, ssp2_hgem
```

```map
title: Change in Aot Eggs IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
fixed:
  commodity: aot-eggs
```