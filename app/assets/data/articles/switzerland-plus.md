---
title: Switzerland plus Summary
date: 4/1/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - chp
  - western_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - chp
 - western_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Switzerland plus - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chp
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Switzerland plus - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chp
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Switzerland plus - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chp
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Switzerland plus - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chp
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Switzerland plus - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chp
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Switzerland plus - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chp
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Europe | Population (million) | 192.46 | 200.24 | 206.61 |
|  | GDP (billion $US) | 6769.83 | 8397.11 | 11291.38 |
|  | Per capita GDP ($US) | 35175.26 | 41935.23 | 54650.69 |
| Switzerland plus | Population (million) | 7.90 | 8.52 | 9.17 |
|  | GDP (billion $US) | 322.51 | 419.14 | 586.00 |
|  | Per capita GDP ($US) | 40824.05| 49194.84| 63904.03|