---
title: Zambia Summary
date: 5/26/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - ssa_zambia
  - eastern_africa
  - africa
scenarios:
 - ssp2_gfdl
 - ssp2_hgem
 - ssp2_miroc
 - ssp2_ipsl
 - ssp2_nocc
tags:
 - ssa_zambia
 - eastern_africa
 - africa
 - baseline
---
# Overview

```chart
mark: bar
title: Zambia - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-zambia
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
```

```chart
mark: bar
title: Zambia - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-zambia
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
| Zambia | Population (million) | 14.96 | 21.37 | 30.10 |
|  | GDP (billion $US) | 25.22 | 69.83 | 236.27 |
|  | Per capita GDP ($US) | 1685.83| 3267.66| 7849.50|
