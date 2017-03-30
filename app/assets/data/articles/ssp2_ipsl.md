---
title: SSP2_IPSL Summary
date: 3/30/2017
type: scenario
project: 'baseline'
scenarios:
 - SSP2_IPSL
tags:
 - SSP2_IPSL
 - baseline
---
Summary of IMPACT model outputs for SSP2_IPSL

```chart
mark: bar
title: Change in SSP2_IPSL Impact Parameters per Commodity Group from 2015 - 2050 (%)
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
change: true
```

```chart
mark: bar
title: Change in SSP2_IPSL Impact Parameters from 2015 - 2050 (%)
width: 70%
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
dropdown:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: true
```

```map
title: Change in SSP2_IPSL IMPACT Parameters from 2015 - 2050 (%)
dropdownCommodityGroup:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
dropdownParameter:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```