---
title: Botswana Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - bwa
  - southern_africa
  - africa
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - bwa
 - southern_africa
 - africa
 - baseline
---
# Overview 

```chart
mark: bar
title: Botswana - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bwa
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Botswana - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bwa
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Botswana - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bwa
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Botswana - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bwa
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Botswana - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bwa
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Botswana - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: bwa
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Southern Africa | Population (million) | 60.63 | 67.91 | 73.34 |
|  | GDP (billion $US) | 628.16 | 1125.79 | 1924.81 |
|  | Per capita GDP ($US) | 10360.55 | 16577.68 | 26245.02 |
| Botswana | Population (million) | 2.13 | 2.43 | 2.74 |
|  | GDP (billion $US) | 31.09 | 54.41 | 88.60 |
|  | Per capita GDP ($US) | 14596.24| 22390.95| 32335.77|