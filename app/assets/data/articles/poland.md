---
title: Poland Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - pol
  - eastern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - pol
 - eastern_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Poland - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pol
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Poland - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pol
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Poland - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pol
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Poland - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pol
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Poland - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pol
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Poland - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pol
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Europe | Population (million) | 292.55 | 283.50 | 271.34 |
|  | GDP (billion $US) | 4649.65 | 7374.04 | 10575.41 |
|  | Per capita GDP ($US) | 15893.52 | 26010.72 | 38974.75 |
| Poland | Population (million) | 38.39 | 37.89 | 35.16 |
|  | GDP (billion $US) | 767.34 | 1129.03 | 1486.29 |
|  | Per capita GDP ($US) | 19988.02| 29797.57| 42272.18|