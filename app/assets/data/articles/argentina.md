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
  region: arg
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Argentina - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: arg
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Argentina - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: arg
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Argentina - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: arg
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Argentina - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: arg
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Argentina - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: arg
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| South America | Population (million) | 411.97 | 460.07 | 490.50 |
|  | GDP (billion $US) | 4813.50 | 8078.48 | 12989.35 |
|  | Per capita GDP ($US) | 11684.10 | 17559.24 | 26481.86 |
| Argentina | Population (million) | 42.05 | 46.16 | 49.38 |
|  | GDP (billion $US) | 719.04 | 1198.22 | 1911.36 |
|  | Per capita GDP ($US) | 17099.64| 25957.97| 38707.17|