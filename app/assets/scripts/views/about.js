'use strict'
import React from 'react'

export class About extends React.Component {
  render () {
    return (
      <section className='page__about'>
        <header className='header__internal header__internal--sm'>
          <div className='row row--short browse__header-text'>
            <h2 className='header--xxlarge with-metadata'>About</h2>
          </div>
        </header>
        <section className='section__internal section__padding--sm'>
          <div className='row row--short content--secondary'>
            <h3 className='header--xlarge'>Why this tool?</h3>
            <p>The IMPACT web tool is a fully interactive online tool designed to highlight and make public the results of simulations performed with the IMPACT model and carried out through various projects. The tool offers:</p>
            <ul>
              <li>User-friendly access to results data coming from IMPACT simulations runs.</li>
              <li>Access to the output and input data that drive the IMPACT simulations, through a link with Dataverse (http://dataverse.org/).</li>
              <li>Downloadable publications describing IMPACT analyses addressing policy issues relevant to global agricultural markets. Most typically the available studies will tackle issues related to climate change, technology change, food security, and resource management.</li>
            </ul>
            <h3 className='header--xlarge'>What is the IMPACT model?</h3>
            <p>IMPACT is a partial-equilibrium global multimarket economic model designed to examine alternative futures of global food supply, demand, trade, prices, and food security.</p>
            <p>The model is used by IFPRI and its partners to provide global baseline projections of agricultural commodity production, trade and malnutrition outcomes, along with cutting-edge research results on quickly evolving topics such as bioenergy, climate change, changing diet/food preferences, nutrition and other themes.</p>
            <p>See <a href='https://www.ifpri.org/program/impact-model'>this page</a> for more information on the model and on the simulations process.</p>

            <h3 className='header--xlarge'>Data Access</h3>
            <p>Input and output data from IMPACT simulations can be downloaded through a link to Dataverse. Please use the ACCESS DATA button on the main landing page to retrieve the publicly available data.</p>

            <h3 className='header--xlarge'>Acknowledgments</h3>
            <p>We thank the Bill and Melinda Gates Foundation, the CGIAR Research Program on Policies, Institutions, and Markets (PIM), and the CGIAR Research Program on Climate Change, Agriculture and Food Security (CCAFS) for funding this work.</p>
            <p>This site is a joint project between the IFPRI IMPACT model team and Development Seed.</p>
          </div>
        </section>
      </section>
    )
  }
}

export default About
