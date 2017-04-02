---
title: Belarus Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - blr
  - eastern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - blr
 - eastern_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Belarus - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blr
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Belarus - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blr
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Belarus - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blr
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Belarus - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blr
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Belarus - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blr
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Belarus - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blr
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Europe | Population (million) | 292.55 | 283.50 | 271.34 |
|  | GDP (billion $US) | 4649.65 | 7374.04 | 10575.41 |
|  | Per capita GDP ($US) | 15893.52 | 26010.72 | 38974.75 |
| Belarus | Population (million) | 9.43 | 8.92 | 8.21 |
|  | GDP (billion $US) | 145.40 | 234.47 | 327.58 |
|  | Per capita GDP ($US) | 15418.88| 26285.87| 39900.12|