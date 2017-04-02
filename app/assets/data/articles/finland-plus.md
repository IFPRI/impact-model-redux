---
title: Finland Plus Summary
date: 4/2/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - fnp
  - northern_europe
  - europe
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - fnp
 - northern_europe
 - europe
 - baseline
---
# Overview 

```chart
mark: bar
title: Finland Plus - Total Demand
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fnp
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Finland Plus - Commodity Supply
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fnp
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Finland Plus - Net Trade
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fnp
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

# Food security

```chart
mark: bar
title: Finland Plus - Population at Risk of Hunger
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fnp
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Finland Plus - Food Availability
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fnp
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Finland Plus - Total Malnourished Children
width: 37%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: fnp
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Northern Europe | Population (million) | 102.16 | 111.25 | 121.57 |
|  | GDP (billion $US) | 3507.84 | 4769.01 | 6692.30 |
|  | Per capita GDP ($US) | 34336.73 | 42867.51 | 55048.94 |
| Finland Plus | Population (million) | 5.49 | 5.84 | 6.18 |
|  | GDP (billion $US) | 190.27 | 243.30 | 335.64 |
|  | Per capita GDP ($US) | 34657.56| 41660.96| 54310.68|