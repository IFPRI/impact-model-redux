---
title: Sao Tome and Principe Summary
date: 3/21/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - stp
  - middle_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - stp
 - middle_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: Sao Tome and Principe - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: stp
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sao Tome and Principe - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: stp
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Sao Tome and Principe - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: stp
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Sao Tome and Principe - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: stp
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Sao Tome and Principe - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: stp
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Sao Tome and Principe - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: stp
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Middle Africa | Population (million) | 143.71 | 200.03 | 267.06 |
|  | GDP (billion $US) | 303.21 | 628.95 | 1615.60 |
|  | Per capita GDP ($US) | 2109.87 | 3144.28 | 6049.58 |
| Sao Tome and Principe | Population (million) | 0.00 | 0.00 | 0.00 |
|  | GDP (billion $US) | 0.00 | 0.00 | 0.00 |
|  | Per capita GDP ($US) | NaN| NaN| NaN|