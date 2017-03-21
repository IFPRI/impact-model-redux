---
title: Sudan Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - sdn
  - northern_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - sdn
 - northern_africa
 - africa
 - baseline
---
Summary of IMPACT model outputs for Sudan

```chart
mark: bar
title: Sudan - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sdn
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sudan - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sdn
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sudan - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sdn
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sudan - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sdn
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Sudan - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sdn
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Sudan - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: sdn
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Northern Africa | Population (million) | 241.72 | 292.96 | 341.31 |
|  | GDP (billion $US) | 1369.02 | 2899.98 | 6158.74 |
|  | Per capita GDP ($US) | 5663.66 | 9898.89 | 18044.42 |
| Sudan | Population (million) | 64.29 | 84.88 | 107.40 |
|  | GDP (billion $US) | 122.17 | 310.24 | 893.76 |
|  | Per capita GDP ($US) | 1900.30| 3655.04| 8321.79|