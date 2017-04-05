---
title: SSP2_HGEM Summary
date: 4/3/2017
type: scenario
project: 'baseline'
scenarios:
 - SSP2_HGEM
tags:
 - SSP2_HGEM
 - baseline
---
Summary of IMPACT model outputs for SSP2_HGEM

```chart
mark: bar
title: Change in SSP2_HGEM Impact Parameters per Commodity Group from 2015 - 2050 (%)
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
title: Change in SSP2_HGEM Impact Parameters from 2015 - 2050 (%)
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

```chart
mark: grouped-bar
title: Change in SSP2_HGEM Impact Parameters per Commodity Group (%) from 2015 - 2050 (SSP2_HGEM vs. SSP2_MIROC)
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
scenarios: SSP2_HGEM, SSP2_MIROC
fixed:
  impactparameter: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
dropdown:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
change: true
```

```map
title: Change in SSP2_HGEM IMPACT Parameters from 2015 - 2050 (%)
dropdownCommodityGroup:
  field: agg_commodity
  values: animal_products,cereals,fruits_vegetables,oils_seeds,food_oils,oil_meals,other,pulses,roots_tubers,sugar
dropdownParameter:
  field: impactparameter
  values: qdxagg, qnxagg, yldxagg, areaxagg, pwxagg, qsupxagg
change: percentage
```