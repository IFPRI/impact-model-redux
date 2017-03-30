---
title: Papua New Guinea Summary
date: 3/30/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - png
  - melanesia
  - oceania
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - png
 - melanesia
 - oceania
 - baseline
---
# Overview 

```chart
mark: bar
title: Papua New Guinea - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: png
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Papua New Guinea - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: png
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Papua New Guinea - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: png
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Papua New Guinea - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: png
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Papua New Guinea - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: png
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Papua New Guinea - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: png
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Melanesia | Population (million) | 9.33 | 11.63 | 13.88 |
|  | GDP (billion $US) | 30.56 | 61.98 | 158.88 |
|  | Per capita GDP ($US) | 3275.46 | 5329.32 | 11446.69 |
| Papua New Guinea | Population (million) | 7.57 | 9.54 | 11.50 |
|  | GDP (billion $US) | 23.76 | 50.04 | 132.21 |
|  | Per capita GDP ($US) | 3138.71| 5245.28| 11496.52|