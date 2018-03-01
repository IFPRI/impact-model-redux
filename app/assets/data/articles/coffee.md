---
title: Coffee Summary
date: 5/26/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - cot_coffee
tags:
 - ssp2_gfdl
 - ssp2_hgem
 - ssp2_miroc
 - ssp2_ipsl
 - ssp2_nocc
---
Summary of IMPACT model outputs for coffee

```chart
mark: line
title: Coffee Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cot-coffee
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
```

```chart
mark: bar
title: Change in Coffee Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cot-coffee
  impactparameter: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
```

```chart
mark: stripe
title: Coffee Impact Parameters over time (SSP2_GFDL vs. SSP2_HGEM)
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cot-coffee
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem, ssp2_ipsl, ssp2_miroc, ssp2_nocc
  shown: ssp2_gfdl, ssp2_hgem
```

```map
title: Change in Coffee IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
fixed:
  commodity: cot-coffee
```
