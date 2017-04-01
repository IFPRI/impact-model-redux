---
title: Rest of Arab Peninsula Summary
date: 4/1/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - rap
  - western_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - rap
 - western_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Rest of Arab Peninsula - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: rap
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Rest of Arab Peninsula - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: rap
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Rest of Arab Peninsula - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: rap
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Rest of Arab Peninsula - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: rap
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Rest of Arab Peninsula - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: rap
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Rest of Arab Peninsula - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: rap
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Asia | Population (million) | 256.91 | 324.92 | 400.07 |
|  | GDP (billion $US) | 3663.22 | 6648.07 | 11375.22 |
|  | Per capita GDP ($US) | 14258.77 | 20460.64 | 28433.07 |
| Rest of Arab Peninsula | Population (million) | 19.95 | 27.13 | 34.75 |
|  | GDP (billion $US) | 928.99 | 1629.98 | 2515.75 |
|  | Per capita GDP ($US) | 46565.91| 60080.35| 72395.68|