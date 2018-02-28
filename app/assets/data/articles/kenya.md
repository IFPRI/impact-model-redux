---
title: Kenya Summary
date: 5/26/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - ssa_kenya
  - eastern_africa
  - africa
scenarios:
 - ssp2_gfdl
 - ssp2_hgem
 - ssp2_miroc
 - ssp2_ipsl
 - ssp2_nocc
tags:
 - ssa_kenya
 - eastern_africa
 - africa
 - baseline
---
# Overview

```chart
mark: bar
title: Kenya - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-kenya
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot
```

```chart
mark: bar
title: Kenya - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-kenya
  impactparameter: qfxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot
```



|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Africa | Population (million) | 362.55 | 498.36 | 672.50 |
|  | GDP (billion $US) | 435.87 | 1137.31 | 3738.87 |
|  | Per capita GDP ($US) | 1202.23 | 2282.11 | 5559.66 |
| Kenya | Population (million) | 45.57 | 60.59 | 78.06 |
|  | GDP (billion $US) | 77.36 | 180.06 | 509.87 |
|  | Per capita GDP ($US) | 1697.61| 2971.78| 6531.77|
