---
title: Other Atlantic Ocean Summary
date: 4/1/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - oao
  - western_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - oao
 - western_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Other Atlantic Ocean - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oao
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Atlantic Ocean - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oao
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Atlantic Ocean - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oao
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Other Atlantic Ocean - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oao
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Atlantic Ocean - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oao
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Atlantic Ocean - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oao
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Europe | Population (million) | 192.46 | 200.24 | 206.61 |
|  | GDP (billion $US) | 6769.83 | 8397.11 | 11291.38 |
|  | Per capita GDP ($US) | 35175.26 | 41935.23 | 54650.69 |
| Other Atlantic Ocean | Population (million) | 0.69 | 0.76 | 0.78 |
|  | GDP (billion $US) | 2.62 | 5.98 | 12.00 |
|  | Per capita GDP ($US) | 3797.10| 7868.42| 15384.62|