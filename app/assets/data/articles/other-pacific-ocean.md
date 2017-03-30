---
title: Other Pacific Ocean Summary
date: 3/30/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - opo
  - polynesia
  - oceania
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - opo
 - polynesia
 - oceania
 - baseline
---
# Overview 

```chart
mark: bar
title: Other Pacific Ocean - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: opo
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Pacific Ocean - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: opo
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Other Pacific Ocean - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: opo
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Other Pacific Ocean - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: opo
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Pacific Ocean - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: opo
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Other Pacific Ocean - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: opo
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Polynesia | Population (million) | 1.15 | 1.28 | 1.37 |
|  | GDP (billion $US) | 11.50 | 16.77 | 25.91 |
|  | Per capita GDP ($US) | 10000.00 | 13101.56 | 18912.41 |
| Other Pacific Ocean | Population (million) | 1.15 | 1.28 | 1.37 |
|  | GDP (billion $US) | 11.50 | 16.77 | 25.91 |
|  | Per capita GDP ($US) | 10000.00| 13101.56| 18912.41|