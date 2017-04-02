---
title: Sri Lanka Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - lka
  - southern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - lka
 - southern_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Sri Lanka - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lka
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sri Lanka - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lka
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sri Lanka - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lka
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Sri Lanka - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lka
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Sri Lanka - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lka
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Sri Lanka - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: lka
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Southern Asia | Population (million) | 1828.35 | 2159.00 | 2471.15 |
|  | GDP (billion $US) | 6916.97 | 15816.93 | 35256.55 |
|  | Per capita GDP ($US) | 3783.18 | 7326.04 | 14267.26 |
| Sri Lanka | Population (million) | 21.73 | 23.44 | 24.19 |
|  | GDP (billion $US) | 133.05 | 294.84 | 563.92 |
|  | Per capita GDP ($US) | 6122.87| 12578.50| 23312.11|