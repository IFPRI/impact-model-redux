---
type: brief
briefType: custom
published: true
title: >-
  Exploring the impact of alternative investments on poverty, hunger, and the
  environment
date: 7/25/2017
project: USAID
locations:
  - ssa
  - eap
  - men
  - lac
  - sas
  - fsu
commodities:
  - cer
tags:
  - baseline
  - USAID
download: 'https://www.ifpri.org/cdmref/p15738coll2/id/131144/filename/131355.pdf'
---

## What is on this brief and how to interpret the results
The brief shows highlights from global and regional IMPACT results estimating the effects of alternative investments options on agriculture production, trade and food security.

## Source project & acknowledgments ##
The Global Futures and [Strategic Foresight program](http://globalfutures.cgiar.org/project-overview/) recently released a study using quantitative foresight modeling to explore the effects of alternative investments options (in agricultural research, resource management, and infrastructure) on the 3 goals underpinning the [Strategy framework of the CGIAR](http://www.cgiar.org/our-strategy/). These three goals, also called System Level Outcomes SLOs), relate to poverty (SLO1), food and nutrition security (SLO2), and natural resources and ecosystem services (SLO3). Impacts on these goals to 2050 were analyzed in the context of overarching trends related to changes in population, income, technology, and climate. The report is intended to help the CGIAR centers, CG Research Programs (CRPs), decision makers and donors to complement other efforts and assess the potential impacts and benefits of long-term investment strategies toward agricultural research and development.
The analysis was led by IFPRI with contributions from colleagues in all 15 CGIAR Centers and other institutions, and with financial support from the United States Agency for International Development, the CGIAR Research Program on Policies, Institutions, and Markets (PIM), the CGIAR Research Program on Climate Change, Agriculture and Food Security (CCAFS), and the Bill and Melinda Gates Foundation.

In this brief we show results from the IMPACT model. These results are informed by a link with the GLOBE global general equilibrium model. The study uses other models – linked to IMPACT - to explore questions related to SLO3, especially land use changes and greenhouse gas emissions. It also includes an estimation of costs for the various investment alternatives, and it goes beyond an analysis of food supply to assess nutrition outcomes. The complete set of results and analysis are available by downloading the full report (in pdf format) at [this page](https://www.ifpri.org/publication/foresight-modeling-agricultural-research).

## Use of the IMPACT model & notes on methodology ##
The IMPACT model is a partial equilibrium, multi–commodity, multi-country model which generates projections of global food supply, demand, trade, and prices (link to about page). IMPACT is designed to analyze alternative scenarios about how population, income, climate and technologies may change over time. Usually, a suite of baseline scenarios provides a reference point to estimate the consequences of changes in a number of inputs and drivers (e.g., changes in yields, population, GDP etc).
The reference scenario (REF_HGEM) used in this analysis as a reference for comparison with alternative investment portfolios assumes “middle-of-the-road” changes in population and income, and rapid climate change. These assumptions are based on the IPCC’s Shared Socioeconomic Pathway 2 (SSP2), in which the global population reaches 9.2 billion by 2050 with an average income of USD 25,000 per person. The projected climate is generated on the Representative Concentration Pathway 8.5 (RCP8.5), as modeled by the HadGEM general circulation model (GCM). At times, also a reference without climate change (REF_NoCC) is used to isolate the effects of climate from the effects of the investments. NoCC represents a historical climate around the year 2005, projected into the future. Key areas of investment considered in the scenarios are agricultural research, water resource management, and infrastructure.

The full set of scenarios, including the full range of investment scenarios are summarized in the table below.

![table investments scenarios2](https://user-images.githubusercontent.com/12040069/29122899-ed37a764-7ce1-11e7-85f0-1bbfd5a6cb53.png)


## Highlights from results & messages of the report##

### Demographic change and economic growth in the group of developing countries will result in significant increases in the demand for food in the coming decades ###
Under the population and economic growth assumptions used in this analysis (SSP2), global population reaches 9.2 billion by 2050 with an economy of USD230 trillion, for a global average income of USD25,000/capita. In this timeframe, most of the growth in GDP (and also population) occurs in the group of developing countries, although per capita income in this group is expected to remain about half that enjoyed in the group of developed countries.

```chart
mark: bar
title: Change in income per capita 2010-2050(%)
width: 100%
encoding:
  x:
    type: nominal
    field: region
  y:
    type: quantitative
    field: val
fixed:
  impactparameter: pcgdpxagg
  region: nam, ssa
dropdown:
  field: _type
  values: ssp2_nocc2, ssp2_hgem2
change:
  field: year
  values: 2010, 2050
  type: percent
```

### Food and nutrition security are projected to improve over the 2010-2050 period but CC is reducing the gains###
Between 2010 and 2050, across developing countries, cereal production is expected to increase by 55 percent, meat production by 79 percent, production of fruits and vegetables by 96 percent, oilseeds by 107 percent, pulses by 87 percent, and roots and tubers by 56 percent.
However, climate change is projected to reduce these gains. Average cereal yields may decrease by 6 – 9 percent relative to the NoCC scenario by 2050. Globally, maize, groundnut, and soybean are particularly affected, with projected reductions of 23, 14, and 12 percent, respectively. And these reduction under climate change affect the majority of world’s regions.

```chart
mark: bar
title: Production will increase but gains are lower under CC
width: 100%
encoding:
  x:
    type: nominal
    field: commodity
  y:
    type: quantitative
    field: val
fixed:
  impactparameter: qsupxagg
  commodity: allc, amt, cer, ols, pul, r&t, f&v
dropdown:
  field: region
  values: eap, fsu, lac, men, sas, ssa
dropdownnew:
  field: _type
  values: ssp2_nocc2, ssp2_hgem2  
change:
  field: year
  values: 2010, 2050
  type: percent
```

```chart
mark: line
title: Yields of cereals decrease under CC
width: 100%
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: val
fixed:
   commodity: cer
   impactparameter: tyldxagg
dropdown:
  field: region
  values: eap, fsu, lac, men, sas, ssa, nam, eur
series:
  field: _type
  values: ssp2_nocc2, ssp2_hgem2
```

Projected increase in production between 2010 and 2050 and higher calorie availability would lead to a steady decrease in undernourished children as well as in the population at risk of hunger but CC would reduce the gains.
In 2010, the estimated number of people at risk of hunger was comparable between the South Asia and SSA regions at over 200 million people, but their experiences are projected to differ significantly in the coming decades. By 2050, the population at risk of hunger in the South Asia region is projected to decline by 170 million people, the largest reduction across all regions. By comparison, the population at risk of hunger in SSA is expected to decline by only one third of that amount.

```chart
mark: line
title: Population at risk of hunger
width: 100%
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: val
fixed:
   impactparameter: populationatriskxagg
dropdown:
  field: region
  values: sas, ssa
series:
  field: _type
  values: ssp2_nocc2, ssp2_hgem2
```
```chart
mark: line
title: Undernourished children (weight for age)
width: 100%
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: val
fixed:
   impactparameter: totalmalnourishedxagg
dropdown:
  field: region
  values: sas, ssa
series:
  field: _type
  values: ssp2_nocc2, ssp2_hgem2
```
### The CGIAR research portfolio can make important differences to sustainable agricultural production systems, food security and nutrition, enhanced by increased investments in NARS agricultural research, improved water management, and infrastructure###
Additional investments in agricultural R&D across CGIAR and NARS can deliver important achievements for the group of developing countries. For example, the HIGH+NARS scenario, is projected to require an additional USD 3.0 billion per year in investments in developing countries (above the USD 8 billion projected in the reference scenario). By 2050, these additional investments are projected to increase incomes by 4 percent and agricultural production by 8 percent. The improvements in turn may lead to a 20 percent decline in the population at risk of hunger by 2050. These advancements are all relative to a reference scenario under climate change but without these additional investments.

```map
title: Change in Production between high-nars and hgem in 2050 (%)
dropdown:
  field: commodity
  values: allc, cer, cer_maize, cer_rice, cer_wheat, r&t, f&v, pul, amt, amt_beef, amt_pork, amt_poultry
change:
  field: _type
  values: ssp2_hgem2, ssp2_hgem_hinars2
  type: percent
fixed:
  impactparameter: qsupxagg
  year: 2050
```
```chart
mark: bar
title: Change in food security in 2050 (%)
width: 100%
encoding:
  x:
    type: nominal
    field: impactparameter
  y:
    type: quantitative
    field: val
fixed:
  impactparameter: percapkcalxagg, totalmalnourishedxagg, populationatriskxagg
  year: 2050
dropdown:
  field: region
  values: eap, fsu, lac, men, sas, ssa, nam, eur
change:
  field: _type
  values: ssp2_hgem2, ssp2_hgem_highnars2
  type: percent
```

```chart
mark: line
title: food security indicators
width: 100%
legend: top
encoding:
  x:
    type: nominal
    field: year
  y:
    type: quantitative
    field: val
dropdown:
  field: region
  values: eap, fsu, lac, men, sas, ssa, nam, eur
dropdownnew:
  field: impactparameter
  values: percapkcalxagg, totalmalnourishedxagg, populationatriskxagg
series:
  field: _type
  values: ssp2_nocc2, ssp2_hgem2, ssp2_hgem_highnars2, ssp2_hgem_hiyld2
```
