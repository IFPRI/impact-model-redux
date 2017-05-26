---
title: Ghana Summary
date: 5/26/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - ssa-ghana
  - western_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - ssa-ghana
 - western_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: Ghana - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-ghana
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
```

```chart
mark: bar
title: Ghana - Household Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ssa-ghana
  impactparameter: qfxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
```



|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Africa | Population (million) | 343.37 | 478.64 | 677.85 |
|  | GDP (billion $US) | 708.31 | 1858.76 | 5834.85 |
|  | Per capita GDP ($US) | 2062.82 | 3883.42 | 8607.88 |
| Ghana | Population (million) | 27.25 | 35.93 | 46.38 |
|  | GDP (billion $US) | 55.80 | 146.22 | 414.35 |
|  | Per capita GDP ($US) | 2047.71| 4069.58| 8933.81|