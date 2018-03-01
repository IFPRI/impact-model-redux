---
title: Russia Summary
date: 5/26/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - fsu_russia
  - eastern_europe
  - europe
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
title: Russia - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fsu-russia
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot
```

```chart
mark: bar
title: Russia - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fsu-russia
  impactparameter: qfxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot
```



|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Europe | Population (million) | 308.81 | 299.73 | 287.31 |
|  | GDP (billion $US) | 4784.99 | 7586.89 | 10899.97 |
|  | Per capita GDP ($US) | 15494.93 | 25312.41 | 37938.01 |
| Russia | Population (million) | 142.67 | 139.63 | 136.71 |
|  | GDP (billion $US) | 2449.87 | 3986.78 | 5655.62 |
|  | Per capita GDP ($US) | 17171.58| 28552.46| 41369.47|
