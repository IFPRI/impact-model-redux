---
title: Zimbabwe Summary
date: 5/26/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - ssa_zimbabwe
  - eastern_africa
  - africa
scenarios:
 - ssp2_gfdl
 - ssp2_hgem
 - ssp2_miroc
 - ssp2_ipsl
 - ssp2_nocc
tags:
 - ssa_zimbabwe
 - eastern_africa
 - africa
 - baseline
---
# Overview

```chart
mark: bar
title: Zimbabwe - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-zimbabwe
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
```

```chart
mark: bar
title: Zimbabwe - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-zimbabwe
  impactparameter: qfxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
```



|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Africa | Population (million) | 362.55 | 498.36 | 672.50 |
|  | GDP (billion $US) | 435.87 | 1137.31 | 3738.87 |
|  | Per capita GDP ($US) | 1202.23 | 2282.11 | 5559.66 |
| Zimbabwe | Population (million) | 12.77 | 13.33 | 13.12 |
|  | GDP (billion $US) | 6.36 | 12.01 | 41.40 |
|  | Per capita GDP ($US) | 498.04| 900.98| 3155.49|
