---
title: Kazakhstan Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - kaz
  - central_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - kaz
 - central_asia
 - asia
 - baseline
---
Summary of IMPACT model outputs for Kazakhstan

```chart
mark: bar
title: Kazakhstan - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kaz
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Kazakhstan - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kaz
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Kazakhstan - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kaz
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Kazakhstan - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kaz
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Kazakhstan - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kaz
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Kazakhstan - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: kaz
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Central Asia | Population (million) | 63.91 | 70.89 | 74.48 |
|  | GDP (billion $US) | 436.73 | 995.42 | 1731.72 |
|  | Per capita GDP ($US) | 6833.52 | 14041.75 | 23250.81 |
| Kazakhstan | Population (million) | 16.87 | 18.69 | 20.18 |
|  | GDP (billion $US) | 240.31 | 515.18 | 751.29 |
|  | Per capita GDP ($US) | 14244.81| 27564.47| 37229.44|