---
title: Cer Barley Summary
date: 5/26/2017
type: brief
briefType: commodity-summary
project: 'baseline'
commodities:
  - cer-barley
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - cer-barley
 - cer
 - baseline
---
Summary of IMPACT model outputs for cer barley

```chart
mark: line
title: Cer Barley Impact Parameters over time
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cer-barley
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
```

```chart
mark: bar
title: Change in Cer Barley Impact Parameters from 2015 - 2050 (%)
width: 37%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cer-barley
  impactparameter: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
```

```chart
mark: stripe
title: Cer Barley Impact Parameters over time (SSP2_GFDL vs. SSP2_HGEM)
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: cer-barley
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
series:
  field: _type
  values: ssp2_gfdl, ssp2_hgem, ssp2_ipsl, ssp2_miroc, ssp2_nocc
  shown: ssp2_gfdl, ssp2_hgem
```

```map
title: Change in Cer Barley IMPACT Parameters from 2015 - 2050 (%)
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
fixed:
  commodity: cer-barley
```