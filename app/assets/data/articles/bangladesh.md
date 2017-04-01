---
title: Bangladesh Summary
date: 4/1/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - bgd
  - southern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - bgd
 - southern_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Bangladesh - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgd
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Bangladesh - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgd
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Bangladesh - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgd
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Bangladesh - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgd
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Bangladesh - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgd
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Bangladesh - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bgd
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Southern Asia | Population (million) | 1828.35 | 2159.00 | 2471.15 |
|  | GDP (billion $US) | 6916.97 | 15816.93 | 35256.55 |
|  | Per capita GDP ($US) | 3783.18 | 7326.04 | 14267.26 |
| Bangladesh | Population (million) | 157.35 | 181.15 | 195.78 |
|  | GDP (billion $US) | 301.56 | 750.71 | 1754.13 |
|  | Per capita GDP ($US) | 1916.49| 4144.13| 8959.70|