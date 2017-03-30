---
title: South Africa Summary
date: 3/30/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - zaf
  - southern_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - zaf
 - southern_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: South Africa - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zaf
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: South Africa - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zaf
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: South Africa - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zaf
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: South Africa - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zaf
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: South Africa - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zaf
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: South Africa - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: zaf
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Southern Africa | Population (million) | 60.63 | 67.91 | 73.34 |
|  | GDP (billion $US) | 628.16 | 1125.79 | 1924.81 |
|  | Per capita GDP ($US) | 10360.55 | 16577.68 | 26245.02 |
| South Africa | Population (million) | 52.49 | 58.59 | 63.04 |
|  | GDP (billion $US) | 571.32 | 1024.29 | 1736.31 |
|  | Per capita GDP ($US) | 10884.36| 17482.33| 27542.99|