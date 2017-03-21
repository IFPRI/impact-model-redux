---
title: Bulgaria Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - bgr
  - eastern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - bgr
 - eastern_europe
 - europe
 - baseline
---
Summary of IMPACT model outputs for Bulgaria

```chart
mark: bar
title: Bulgaria - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgr
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Bulgaria - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgr
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Bulgaria - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgr
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Bulgaria - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgr
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Bulgaria - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgr
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Bulgaria - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgr
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Europe | Population (million) | 292.55 | 283.50 | 271.34 |
|  | GDP (billion $US) | 4649.65 | 7374.04 | 10575.41 |
|  | Per capita GDP ($US) | 15893.52 | 26010.72 | 38974.75 |
| Bulgaria | Population (million) | 7.27 | 6.75 | 6.31 |
|  | GDP (billion $US) | 96.14 | 165.04 | 245.59 |
|  | Per capita GDP ($US) | 13224.21| 24450.37| 38920.76|