---
title: Other Indian Ocean Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - oio
  - southern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - oio
 - southern_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Other Indian Ocean - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oio
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Indian Ocean - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oio
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Indian Ocean - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oio
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Other Indian Ocean - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oio
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Indian Ocean - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oio
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Indian Ocean - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: oio
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Southern Asia | Population (million) | 1828.35 | 2159.00 | 2471.15 |
|  | GDP (billion $US) | 6916.97 | 15816.93 | 35256.55 |
|  | Per capita GDP ($US) | 3783.18 | 7326.04 | 14267.26 |
| Other Indian Ocean | Population (million) | 3.62 | 4.22 | 4.81 |
|  | GDP (billion $US) | 22.71 | 40.57 | 69.26 |
|  | Per capita GDP ($US) | 6273.48| 9613.74| 14399.17|