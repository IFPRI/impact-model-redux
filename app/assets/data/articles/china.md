---
title: China Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - chm
  - eastern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - chm
 - eastern_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: China - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chm
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: China - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chm
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: China - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chm
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: China - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chm
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: China - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chm
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: China - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: chm
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Asia | Population (million) | 1574.25 | 1588.97 | 1456.71 |
|  | GDP (billion $US) | 20943.41 | 42887.76 | 62308.75 |
|  | Per capita GDP ($US) | 13303.74 | 26990.92 | 42773.61 |
| China | Population (million) | 1371.37 | 1389.58 | 1273.18 |
|  | GDP (billion $US) | 15159.89 | 35478.14 | 53401.23 |
|  | Per capita GDP ($US) | 11054.56| 25531.56| 41943.19|