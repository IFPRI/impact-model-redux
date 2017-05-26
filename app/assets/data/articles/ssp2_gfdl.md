---
title: SSP2_GFDL Summary
date: 5/26/2017
type: scenario
project: 'baseline'
scenarios:
 - SSP2_GFDL
tags:
 - SSP2_GFDL
 - baseline
---
Summary of IMPACT model outputs for SSP2_GFDL

```chart
mark: bar
title: Change in SSP2_GFDL Impact Parameters per Commodity Group from 2015 - 2050 (%)
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qfxagg
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
change:
  field: year
  values: 2015, 2050
  type: percent
```

```chart
mark: bar
title: Change in SSP2_GFDL Impact Parameters from 2015 - 2050 (%)
width: 70%
encoding:
  x:
    type: nominal
    field: agg_commodity
  y:
    type: quantitative
    field: Val
fixed:
  agg_commodity: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
dropdown:
  field: impactparameter
  values: qdxagg, qfxagg
change:
  field: year
  values: 2015, 2050
  type: percent
```

```chart
mark: grouped-bar
title: Change in SSP2_GFDL Impact Parameters per Commodity Group (%) from 2015 - 2050 (SSP2_GFDL vs. SSP2_GFDL)
width: 70%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qdxagg, qfxagg
dropdown:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
series:
  field: _type
  values: ssp2_gfdl, ssp2_gfdl
change:
  field: year
  values: 2015, 2050
  type: percent
```

```map
title: Change in SSP2_GFDL IMPACT Parameters from 2015 - 2050 (%)
dropdownCommodityGroup:
  field: agg_commodity
  values: amt,aot,cer,r&t,pul,f&v,sgc,sgr,ols,oil,mls,cot,for
dropdownParameter:
  field: impactparameter
  values: qdxagg, qfxagg,
change:
  field: year
  values: 2015, 2050
  type: percent
```