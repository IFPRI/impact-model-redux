---
title: SSP2_MIROC Summary
date: 5/26/2017
type: scenario
briefType: scenario
project: 'baseline'
scenarios:
 - SSP2_MIROC
tags:
 - SSP2_MIROC
 - baseline
---
Summary of IMPACT model outputs for SSP2_MIROC

```chart
mark: bar
title: Change in SSP2_MIROC Impact Parameters per Commodity Group from 2015 - 2050 (%)
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
title: Change in SSP2_MIROC Impact Parameters from 2015 - 2050 (%)
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
title: Change in SSP2_MIROC Impact Parameters per Commodity Group (%) from 2015 - 2050 (SSP2_MIROC vs. SSP2_IPSL)
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
  values: ssp2_miroc, ssp2_ipsl
change:
  field: year
  values: 2015, 2050
  type: percent
```

```map
title: Change in SSP2_MIROC IMPACT Parameters from 2015 - 2050 (%)
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