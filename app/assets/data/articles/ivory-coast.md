---
title: Ivory Coast Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - civ
  - western_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - civ
 - western_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: Ivory Coast - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: civ
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Ivory Coast - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: civ
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Ivory Coast - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: civ
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Ivory Coast - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: civ
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Ivory Coast - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: civ
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Ivory Coast - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: civ
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Africa | Population (million) | 343.37 | 478.64 | 677.85 |
|  | GDP (billion $US) | 708.31 | 1858.76 | 5834.85 |
|  | Per capita GDP ($US) | 2062.82 | 3883.42 | 8607.88 |
| Ivory Coast | Population (million) | 21.46 | 26.18 | 30.62 |
|  | GDP (billion $US) | 41.48 | 137.60 | 462.11 |
|  | Per capita GDP ($US) | 1932.90| 5255.92| 15091.77|