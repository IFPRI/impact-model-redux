---
title: El Salvador Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - slv
  - central_america
  - americas
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - slv
 - central_america
 - americas
 - baseline
---
# Overview 

```chart
mark: bar
title: El Salvador - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slv
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: El Salvador - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slv
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: El Salvador - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slv
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: El Salvador - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slv
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: El Salvador - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slv
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: El Salvador - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slv
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Central America | Population (million) | 165.76 | 191.15 | 210.73 |
|  | GDP (billion $US) | 1963.06 | 3201.08 | 5491.02 |
|  | Per capita GDP ($US) | 11842.78 | 16746.43 | 26057.13 |
| El Salvador | Population (million) | 6.30 | 6.40 | 6.08 |
|  | GDP (billion $US) | 40.14 | 58.67 | 95.47 |
|  | Per capita GDP ($US) | 6371.43| 9167.19| 15702.30|