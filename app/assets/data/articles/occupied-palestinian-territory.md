---
title: Occupied Palestinian Territory Summary
date: 4/1/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - pse
  - western_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - pse
 - western_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Occupied Palestinian Territory - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pse
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Occupied Palestinian Territory - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pse
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Occupied Palestinian Territory - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pse
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Occupied Palestinian Territory - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pse
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Occupied Palestinian Territory - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pse
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Occupied Palestinian Territory - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: pse
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Asia | Population (million) | 256.91 | 324.92 | 400.07 |
|  | GDP (billion $US) | 3663.22 | 6648.07 | 11375.22 |
|  | Per capita GDP ($US) | 14258.77 | 20460.64 | 28433.07 |
| Occupied Palestinian Territory | Population (million) | 4.48 | 5.40 | 5.83 |
|  | GDP (billion $US) | 14.79 | 37.65 | 97.46 |
|  | Per capita GDP ($US) | 3301.34| 6972.22| 16716.98|