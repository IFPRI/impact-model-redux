---
title: Other Caribbean Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - crb
  - caribbean
  - americas
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - crb
 - caribbean
 - americas
 - baseline
---
# Overview 

```chart
mark: bar
title: Other Caribbean - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: crb
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Caribbean - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: crb
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Caribbean - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: crb
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Other Caribbean - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: crb
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Caribbean - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: crb
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Caribbean - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: crb
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Caribbean | Population (million) | 42.28 | 44.64 | 44.48 |
|  | GDP (billion $US) | 337.48 | 508.02 | 797.66 |
|  | Per capita GDP ($US) | 7982.02 | 11380.38 | 17933.00 |
| Other Caribbean | Population (million) | 7.22 | 7.16 | 6.62 |
|  | GDP (billion $US) | 124.20 | 165.82 | 208.39 |
|  | Per capita GDP ($US) | 17202.22| 23159.22| 31478.85|