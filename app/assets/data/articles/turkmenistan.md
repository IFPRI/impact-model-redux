---
title: Turkmenistan Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - tkm
  - central_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - tkm
 - central_asia
 - asia
 - baseline
---
Summary of IMPACT model outputs for Turkmenistan

```chart
mark: bar
title: Turkmenistan - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: tkm
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Turkmenistan - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: tkm
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Turkmenistan - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: tkm
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Turkmenistan - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: tkm
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Turkmenistan - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: tkm
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Turkmenistan - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: tkm
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Central Asia | Population (million) | 63.91 | 70.89 | 74.48 |
|  | GDP (billion $US) | 436.73 | 995.42 | 1731.72 |
|  | Per capita GDP ($US) | 6833.52 | 14041.75 | 23250.81 |
| Turkmenistan | Population (million) | 5.33 | 6.01 | 6.37 |
|  | GDP (billion $US) | 55.16 | 157.97 | 289.61 |
|  | Per capita GDP ($US) | 10348.97| 26284.53| 45464.68|