---
title: Vanuatu Summary
date: 3/20/2017
type: brief
briefType: country-summary
project: 'baseline'
locations:
  - vut
  - melanesia
  - oceania
scenarios:
 - SSP2_GFDL
 - SSP2_HGEM
 - SSP2_MIROC
 - SSP2_IPSL
 - SSP2_NOCC
tags:
 - vut
 - melanesia
 - oceania
 - baseline
---
Summary of IMPACT model outputs for Vanuatu

```chart
mark: bar
title: Vanuatu - Total Demand
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: vut
  impactparameter: qdxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Vanuatu - Commodity Supply
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: vut
  impactparameter: qsupxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Vanuatu - Net Trade
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: vut
  impactparameter: qnxagg
  year: 2015,2030,2050
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
```

```chart
mark: bar
title: Vanuatu - Population at Risk of Hunger
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: vut
  impactparameter: populationatriskxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Vanuatu - Food Availability
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: vut
  impactparameter: foodavailxagg
  year: 2015,2030,2050
```

```chart
mark: bar
title: Vanuatu - Total Malnourished Children
width: 33%
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  region: vut
  impactparameter: totalmalnourishedxagg
  year: 2015,2030,2050
```

|   |   | 2015 | 2030 | 2050 |
|---|---|---|---|---|
| Melanesia | Population (million) | 9.33 | 11.63 | 13.88 |
|  | GDP (billion $US) | 30.56 | 61.98 | 158.88 |
|  | Per capita GDP ($US) | 3275.46 | 5329.32 | 11446.69 |
| Vanuatu | Population (million) | 0.27 | 0.35 | 0.43 |
|  | GDP (billion $US) | 1.14 | 2.26 | 5.83 |
|  | Per capita GDP ($US) | 4222.22| 6457.14| 13558.14|