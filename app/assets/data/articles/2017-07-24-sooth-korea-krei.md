---
type: brief
briefType: brief
published: false
title: South Korea - KREI
date: 07/24/2017
project: KREI
locations:
  - eastern_asia
commodities:
  - cer-rice
scenarios:
  - ssp2_hgem
  - ssp2_nocc
  - ssp2_gfdl
tags:
  - cer-rice
  - cer
---
## What is on this brief and how to interpret the results
This Brief shows standard country level results for South Korea, originating from the IMPACT baseline suite of scenarios 


## Source project & acknowledgments
The simulations were conducted in the context of a joint project between the EPT Department of the International Food Policy Research Institute (IFPRI) and the Korean Rural Economic Institute (KREI). The goal of the project was to explore the possible future effects of climate change on the Korean agriculture sector. 
Funding for this study was provided by the Korea Rural Economics Institute. Supplementary support was provided by the CGIAR Research Program on Policies, Institutions, and Markets (PIM), the CGIAR Research Program on Climate Change, Agriculture, and Food Security (CCAFS), and the Bill & Melinda Gates Foundation. 


## Context for the project – Background/Introduction
South Korea has experienced large changes in the agricultural sector and shifts in diet in recent decades, as the country opened its economy and food market. 
In the last several decades arable land has been steadily declining, domestic production has decreased by about one third, more animal proteins have been added to the diet, and agricultural imports have grown five-fold. 

While indicative of a rapidly growing economy, these trends may expose domestic markets to fluctuations in the global food market and underpin questions about the future of South Korea’s agriculture sector and long-term food security in the region. To inform national agricultural policy, it is important to better understand the possible future trends of domestic food production and dependence on food imports, and assess the prospects for improvements in food security. The analysis becomes all the more urgent when considering the impacts that climate change may have on food and agricultural production in both South Korea and its major trading partners.

In this context, these were the main questions we wanted to ask:
1. Given the current estimates of population and GDP growth, are the recent area and production trends    highlighted in this introduction likely to continue in the future, even under climate change conditions?
2. Will climate change affect the overall ability of South Korea to produce food, especially rice, which   still represents the major source of daily calories?;
3. What do these estimates mean from a food security standpoint for South Korea?



We answered these questions using IFPRI’s International Model for Policy Analysis of Agricultural Commodities and Trade (IMPACT) by simulating future trends of agricultural supply and demand for South Korea and selected regions under three climate change scenarios.


## IMPACT model version 3.2.1
The IMPACT model is a partial equilibrium, multi–commodity, multi-country model which generates projections of global food supply, demand, trade, and prices (link to about page). . IMPACT is designed to allow for analyzing alternative scenarios about how population, income, climate and technologies may change over time. A suite of baseline scenarios provides a reference point to estimate the consequences of changes in a number of inputs and drivers (e.g., changes in yields, population, GDP etc). The current baseline suite of scenarios is built around the SSP2 Shared Socioeconomic Pathway (SSPs) combined with the Representative Concentration Pathways (RCP) 8.5 scenario, and run under five different possible climate change futures.
SSP2 represents a middle of the road projection for population and GDP. The five climates that are used with SSP2 are NoCC, GFDL, MIROC, IPSL, and HADGEM. NoCC represents the effects of historical climate going into the future. The others represent various Global Circulation Models (GCMs).


## Results
### Figure 1. agricultural harvested area, production & net imports for all crops in South Korea
```chart
mark: line
title: Example Line Chart
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
  region: eap-laos 
  commodity: cer-rice
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
series:
  field: _type
  values: ssp2_nocc, ssp2_gfdl, ssp2_hgem, ssp2_ipsl```


### Figure 2. Yield (tons per ha) of rice in South Korea between 2010 and 2050
```chart
mark: stripe
title: Example Stripe Chart - Korea Yields
width: 40rem
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: Val
fixed:
  impactparameter: qfxagg
  region: eap-laos
  commodity: cer-rice
series:
  field: _type
  values: ssp2_nocc, ssp2_ipsl, ssp2_gfdl, ssp2_hgem
  ```

### Figure 3. Area, demand Production and Yields for Rice in SK % change 2010 - 2050
```chart
mark: bar
title: Example Bar Chart
width: 50%
encoding:
  x:
    type: nominal
    field: _type
  y:
    type: quantitative
    field: Val
fixed:
  region: eap-laos
  commodity: cer-rice
dropdown:
  field: impactparameter
  values: qfxagg, qdxagg
series:
  field: _type
  values: ssp2_nocc, ssp2_ipsl, ssp2_gfdl, ssp2_hgem
change:
  field: year
  values: 2010, 2050
  type: percent```
