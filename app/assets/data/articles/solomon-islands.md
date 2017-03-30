---
title: Solomon Islands Summary
date: 3/30/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - slb
  - melanesia
  - oceania
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - slb
 - melanesia
 - oceania
 - baseline
---
# Overview 

```chart
mark: bar
title: Solomon Islands - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slb
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Solomon Islands - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slb
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Solomon Islands - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slb
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Solomon Islands - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slb
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Solomon Islands - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slb
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Solomon Islands - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: slb
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Melanesia | Population (million) | 9.33 | 11.63 | 13.88 |
|  | GDP (billion $US) | 30.56 | 61.98 | 158.88 |
|  | Per capita GDP ($US) | 3275.46 | 5329.32 | 11446.69 |
| Solomon Islands | Population (million) | 0.60 | 0.78 | 0.97 |
|  | GDP (billion $US) | 1.71 | 3.71 | 9.50 |
|  | Per capita GDP ($US) | 2850.00| 4756.41| 9793.81|