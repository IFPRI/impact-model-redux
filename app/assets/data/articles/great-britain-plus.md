---
title: Great Britain plus Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - ukp
  - northern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - ukp
 - northern_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Great Britain plus - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ukp
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Great Britain plus - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ukp
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Great Britain plus - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ukp
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Great Britain plus - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ukp
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Great Britain plus - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ukp
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Great Britain plus - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: ukp
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Northern Europe | Population (million) | 102.16 | 111.25 | 121.57 |
|  | GDP (billion $US) | 3507.84 | 4769.01 | 6692.30 |
|  | Per capita GDP ($US) | 34336.73 | 42867.51 | 55048.94 |
| Great Britain plus | Population (million) | 64.18 | 70.04 | 76.59 |
|  | GDP (billion $US) | 2186.47 | 2989.88 | 4196.67 |
|  | Per capita GDP ($US) | 34067.78| 42688.18| 54793.97|