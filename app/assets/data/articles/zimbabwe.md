---
title: Zimbabwe Summary
date: 3/30/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - zwe
  - eastern_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - zwe
 - eastern_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: Zimbabwe - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zwe
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Zimbabwe - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zwe
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Zimbabwe - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zwe
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Zimbabwe - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zwe
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Zimbabwe - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zwe
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Zimbabwe - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zwe
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Africa | Population (million) | 362.55 | 498.36 | 672.50 |
|  | GDP (billion $US) | 435.91 | 1137.44 | 3739.42 |
|  | Per capita GDP ($US) | 1202.34 | 2282.37 | 5560.48 |
| Zimbabwe | Population (million) | 12.77 | 13.33 | 13.12 |
|  | GDP (billion $US) | 6.36 | 12.01 | 41.40 |
|  | Per capita GDP ($US) | 498.04| 900.98| 3155.49|