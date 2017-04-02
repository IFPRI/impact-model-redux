---
title: Mongolia Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - mng
  - eastern_asia
  - asia
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - mng
 - eastern_asia
 - asia
 - baseline
---
# Overview 

```chart
mark: bar
title: Mongolia - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: mng
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Mongolia - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: mng
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Mongolia - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: mng
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Mongolia - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: mng
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Mongolia - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: mng
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Mongolia - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: mng
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Eastern Asia | Population (million) | 1574.25 | 1588.97 | 1456.71 |
|  | GDP (billion $US) | 20943.41 | 42887.76 | 62308.75 |
|  | Per capita GDP ($US) | 13303.74 | 26990.92 | 42773.61 |
| Mongolia | Population (million) | 2.96 | 3.41 | 3.76 |
|  | GDP (billion $US) | 17.76 | 53.37 | 119.00 |
|  | Per capita GDP ($US) | 6000.00| 15651.03| 31648.94|