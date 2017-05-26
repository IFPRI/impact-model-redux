---
title: SSP2_NOCC Summary
date: 5/26/2017
type: scenario
briefType: scenario
project: 'baseline'
scenarios:
 - SSP2_NOCC
tags:
 - SSP2_NOCC
 - baseline
---
Summary of IMPACT model outputs for SSP2_NOCC

```chart
mark: bar
title: Change in SSP2_NOCC Impact Parameters per Commodity Group from 2015 - 2050 (%)
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
title: Change in SSP2_NOCC Impact Parameters from 2015 - 2050 (%)
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
title: Change in SSP2_NOCC Impact Parameters per Commodity Group (%) from 2015 - 2050 (SSP2_NOCC vs. SSP2_HGEM)
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
  values: ssp2_nocc, ssp2_hgem
change:
  field: year
  values: 2015, 2050
  type: percent
```

```map
title: Change in SSP2_NOCC IMPACT Parameters from 2015 - 2050 (%)
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