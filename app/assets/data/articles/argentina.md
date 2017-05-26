---
title: Argentina Summary
date: 4/3/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - arg
  - south_america
  - americas
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - arg
 - south_america
 - americas
 - baseline
---
# Overview

```chart
mark: bar
title: Argentina - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lac-argentina
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt, aot, cer, cot, f&v, for, mls, oil, ols, pul, r&t, sgc, sgr
  ```

```chart
mark: bar
title: Argentina - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lac-argentina
  impactparameter: qfxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt, aot, cer, cot, f&v, for, mls, oil, ols, pul, r&t, sgc, sgr
```


|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| South America | Population (million) | 411.97 | 460.07 | 490.50 |
|  | GDP (billion $US) | 4813.50 | 8078.48 | 12989.35 |
|  | Per capita GDP ($US) | 11684.10 | 17559.24 | 26481.86 |
| Argentina | Population (million) | 42.05 | 46.16 | 49.38 |
|  | GDP (billion $US) | 719.04 | 1198.22 | 1911.36 |
|  | Per capita GDP ($US) | 17099.64| 25957.97| 38707.17|
