---
title: Equatorial Guinea Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - gnq
  - middle_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - gnq
 - middle_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: Equatorial Guinea - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: gnq
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Equatorial Guinea - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: gnq
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Equatorial Guinea - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: gnq
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Equatorial Guinea - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: gnq
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Equatorial Guinea - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: gnq
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Equatorial Guinea - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: gnq
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Middle Africa | Population (million) | 143.71 | 200.03 | 267.06 |
|  | GDP (billion $US) | 303.21 | 628.95 | 1615.60 |
|  | Per capita GDP ($US) | 2109.87 | 3144.28 | 6049.58 |
| Equatorial Guinea | Population (million) | 0.80 | 1.10 | 1.44 |
|  | GDP (billion $US) | 25.35 | 39.15 | 67.73 |
|  | Per capita GDP ($US) | 31687.50| 35590.91| 47034.72|