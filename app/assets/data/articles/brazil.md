---
title: Brazil Summary
date: 5/26/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - lac_brazil
  - south_america
  - americas
tags:
 - ssp2_gfdl
 - ssp2_hgem
 - ssp2_miroc
 - ssp2_ipsl
 - ssp2_nocc
---
# Overview

```chart
mark: bar
title: Brazil - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lac-brazil
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot
```

```chart
mark: bar
title: Brazil - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lac-brazil
  impactparameter: qfxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot
```



|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| South America | Population (million) | 411.97 | 460.07 | 490.50 |
|  | GDP (billion $US) | 4813.50 | 8078.48 | 12989.35 |
|  | Per capita GDP ($US) | 11684.10 | 17559.24 | 26481.86 |
| Brazil | Population (million) | 203.15 | 222.82 | 231.87 |
|  | GDP (billion $US) | 2313.37 | 3776.17 | 5613.10 |
|  | Per capita GDP ($US) | 11387.50| 16947.18| 24207.96|
