---
title: South Korea Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - kor
  - eastern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - kor
 - eastern_asia
 - asia
 - baseline
---
Summary of IMPACT model outputs for South Korea

```chart
mark: bar
title: South Korea - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kor
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: South Korea - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kor
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: South Korea - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kor
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: South Korea - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kor
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: South Korea - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kor
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: South Korea - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kor
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Asia | Population (million) | 1574.25 | 1588.97 | 1456.71 |
|  | GDP (billion $US) | 20943.41 | 42887.76 | 62308.75 |
|  | Per capita GDP ($US) | 13303.74 | 26990.92 | 42773.61 |
| South Korea | Population (million) | 48.91 | 49.66 | 46.18 |
|  | GDP (billion $US) | 1595.57 | 2542.59 | 3421.85 |
|  | Per capita GDP ($US) | 32622.57| 51199.96| 74098.09|