---
title: Saudi Arabia Summary
date: 4/1/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - sau
  - western_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - sau
 - western_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Saudi Arabia - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sau
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Saudi Arabia - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sau
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Saudi Arabia - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sau
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Saudi Arabia - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sau
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Saudi Arabia - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sau
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Saudi Arabia - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sau
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Asia | Population (million) | 256.91 | 324.92 | 400.07 |
|  | GDP (billion $US) | 3663.22 | 6648.07 | 11375.22 |
|  | Per capita GDP ($US) | 14258.77 | 20460.64 | 28433.07 |
| Saudi Arabia | Population (million) | 31.08 | 41.86 | 54.41 |
|  | GDP (billion $US) | 731.94 | 1321.31 | 2157.09 |
|  | Per capita GDP ($US) | 23550.19| 31564.98| 39645.10|