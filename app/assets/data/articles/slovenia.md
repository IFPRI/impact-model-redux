---
title: Slovenia Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - svn
  - southern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - svn
 - southern_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Slovenia - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: svn
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Slovenia - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: svn
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Slovenia - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: svn
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Slovenia - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: svn
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Slovenia - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: svn
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Slovenia - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: svn
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Southern Europe | Population (million) | 157.91 | 160.99 | 162.67 |
|  | GDP (billion $US) | 3786.56 | 4683.70 | 6170.36 |
|  | Per capita GDP ($US) | 23979.23 | 29093.11 | 37931.76 |
| Slovenia | Population (million) | 2.07 | 2.13 | 2.20 |
|  | GDP (billion $US) | 55.26 | 74.28 | 105.79 |
|  | Per capita GDP ($US) | 26695.65| 34873.24| 48086.36|