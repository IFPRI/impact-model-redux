---
title: Baltic States Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - blt
  - northern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - blt
 - northern_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Baltic States - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blt
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Baltic States - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blt
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Baltic States - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blt
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Baltic States - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blt
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Baltic States - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blt
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Baltic States - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blt
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Northern Europe | Population (million) | 102.16 | 111.25 | 121.57 |
|  | GDP (billion $US) | 3507.84 | 4769.01 | 6692.30 |
|  | Per capita GDP ($US) | 34336.73 | 42867.51 | 55048.94 |
| Baltic States | Population (million) | 6.77 | 6.37 | 5.81 |
|  | GDP (billion $US) | 124.56 | 180.39 | 242.16 |
|  | Per capita GDP ($US) | 18398.82| 28318.68| 41679.86|