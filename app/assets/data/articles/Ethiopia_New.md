---
type: brief
briefType: brief
published: false
date: 05/04/2017
project: baseline
locations:
  - eth
  - ssa
commodities:
  - whea
scenarios:
  - ssp2_gfdl
tags:
  - test
---
## what is on this brief and how to interpret the results
This brief shows country level results for Ethiopia, originating from IMPACT baseline simulations under the SSP2-GFDL climate change scenario.

## short paragraph on the source project
The IMPACT model is a partial equilibrium, multi–commodity, multi-country model which generates projections of global food supply, demand, trade, and prices (link to about page). . IMPACT is designed to allow for analyzing alternative scenarios about how population, income, climate and technologies may change over time. A suite of baseline scenarios provides a reference point to estimate the consequences of changes in a number of inputs and drivers (e.g., changes in yields, population, GDP etc). The current baseline suite of scenarios is built around the SSP2 Shared Socioeconomic Pathway (SSPs) combined with the Representative Concentration Pathways (RCP) 8.5 scenario, and run under five different possible climate change futures.
SSP2 represents a middle of the road projection for population and GDP. The five climates that are used with SSP2 are NoCC, GFDL, MIROC, IPSL, and HADGEM. NoCC represents the effects of historical climate going into the future. The others represent various Global Circulation Models (GCMs).


## Indexed price line (multi line)

### Line
Compare values from multiple scenarios
```chart
mark: line
title: Wheat Impact Parameters over time (SSP2_NOCC/SSP2_HGEM/SSP2_GFDL/SSP2_IPSL)
width: 100%
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  commodity: whea
scenarios: ssp2_gfdl, ssp2_hgem, ssp2_ipsl, ssp2_nocc
dropdown:
  field: impactparameter
  values: qdxagg, yldxagg, areaxagg, qsupxagg
dropdownRegion:
  field: region
  values: eth, usa, chp
```



### Bar
Examine a singular data source
```chart
mark: bar
title: Change in SSP2_IPSL Impact Parameters per Commodity Group from 2015 - 2050 (%)
width: 100%
scenarios: ssp2_ipsl
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
  values: cereals, animal_products, fruits_vegetables, oils_seeds, food_oils, oil_meals, other, pulses, roots_tubers, sugar
change: absolute
```



Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.
