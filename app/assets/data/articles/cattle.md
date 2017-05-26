---
title: Cattle Summary
date: 5/26/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - amt-beef
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - amt-beef
 - amt
 - baseline
---
Summary of IMPACT model outputs for cattle

```chart
mark: line
title: Cattle Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: amt-beef
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
```

```chart
mark: bar
title: Change in Cattle Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: amt-beef
  impactparameter: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
```

```chart
mark: stripe
title: Cattle Impact Parameters over time (SSP2_GFDL vs. SSP2_HGEM)
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: amt-beef
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem, ssp2_ipsl, ssp2_miroc, ssp2_nocc
  shown: ssp2_gfdl, ssp2_hgem
```

```map
title: Change in Cattle IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
fixed:
  commodity: amt-beef
```