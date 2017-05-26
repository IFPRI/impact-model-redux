---
title: SSP2_IPSL Summary
date: 5/26/2017
type: scenario
briefType: scenario
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
title: Change in SSP2_IPSL Impact Parameters per Commodity Group (%) from 2015 - 2050 (SSP2_IPSL vs. SSP2_IPSL)
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
  values: ssp2_ipsl, ssp2_ipsl
change:
  field: year
  values: 2015, 2050
  type: percent
```

```map
title: Change in SSP2_IPSL IMPACT Parameters from 2015 - 2050 (%)
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