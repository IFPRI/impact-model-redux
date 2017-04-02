---
title: Belgium-Luxembourg Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - blx
  - western_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - blx
 - western_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Belgium-Luxembourg - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blx
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Belgium-Luxembourg - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blx
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Belgium-Luxembourg - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blx
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Belgium-Luxembourg - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blx
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Belgium-Luxembourg - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blx
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Belgium-Luxembourg - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: blx
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Western Europe | Population (million) | 192.46 | 200.24 | 206.61 |
|  | GDP (billion $US) | 6769.83 | 8397.11 | 11291.38 |
|  | Per capita GDP ($US) | 35175.26 | 41935.23 | 54650.69 |
| Belgium-Luxembourg | Population (million) | 11.56 | 12.45 | 13.43 |
|  | GDP (billion $US) | 424.50 | 557.10 | 804.19 |
|  | Per capita GDP ($US) | 36721.45| 44746.99| 59880.12|