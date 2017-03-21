---
title: North Korea Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - prk
  - eastern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - prk
 - eastern_asia
 - asia
 - baseline
---
Summary of IMPACT model outputs for North Korea

```chart
mark: bar
title: North Korea - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: prk
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: North Korea - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: prk
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: North Korea - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: prk
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: North Korea - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: prk
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: North Korea - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: prk
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: North Korea - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: prk
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Asia | Population (million) | 1574.25 | 1588.97 | 1456.71 |
|  | GDP (billion $US) | 20943.41 | 42887.76 | 62308.75 |
|  | Per capita GDP ($US) | 13303.74 | 26990.92 | 42773.61 |
| North Korea | Population (million) | 24.91 | 25.90 | 24.97 |
|  | GDP (billion $US) | 47.33 | 49.21 | 47.44 |
|  | Per capita GDP ($US) | 1900.04| 1900.00| 1899.88|