'use strict'
import React from 'react'

// Components

export class Map extends React.Component {
  render () {
    return (
      <div>
        <div id='map-loader'></div>
        <div className='row'>
          <nav className='navbar navbar-default navbar-view'>
            <div className='container'>
              <div className='navbar-header'>
                <a className='navbar-brand no-point'>Map</a>
              </div>
              <ul className='nav navbar-nav'>
                <li className='dropdown'>
                  <a className='dropdown-toggle' data-toggle='dropdown' id='dropdownMenu1' type='button'>Commodities<span className='caret'></span></a>
                  <ul className='dropdown-menu scrollable-menu' data-type='agg-commodity'>
                    {/* <% _.each(groups, function(group){ %> */}
                    <li className='dropdown-submenu menu-map'>
                      {/* <a tabindex='-1'><%= translate(group.name) %></a> */}
                      <a tabIndex='-1'></a>
                      <ul className='dropdown-menu' data-type='commodity'>
                        {/* <% _.each(group.array, function(el){ %> */}
                        <li className='menu-map'><a tabIndex='-1'></a></li>
                        {/* <li className='menu-map'><a tabindex='-1'><%= translate(el) %></a></li> */}
                        {/* <% }) %> */}
                      </ul>
                    </li>
                    {/* <%  }) %> */}
                  </ul>
                </li>
                <li className='dropdown'>
                  <a className='dropdown-toggle' data-toggle='dropdown' id='dropdownMenu3' type='button'>IMPACT Results <span className='caret'></span></a>
                  <ul className='dropdown-menu scrollable-menu' data-type='description'>
                    {/* <% _.each(description, function(x){ %> */}
                    {/* <li className='description-menu-map menu-map'><a tabindex='-1'><%= translate(x) %></a></li> */}
                    <li className='description-menu-map menu-map'><a tabIndex='-1'></a></li>
                    {/* <%  }) %> */}
                  </ul>
                </li>
              </ul>
              <ul className='nav navbar-nav navbar-right'>
                <li><a className='level-toggle' id='region'>Country Level</a></li>
                <li><a className='level-toggle' id='agg_subcontinent'>Sub-Continent Level</a></li>
                <li><a className='level-toggle' id='agg_continent'>Continent Level</a></li>
              </ul>
              </div>
            </nav>
          </div>
        <div className='container'>
          <div className='row'>
            <div id='world-map'></div>
          </div>
          <div className='help-text'>
            <a className='close-help' href='#'>x</a>
            <h2>
              Map
              </h2>The map shows change in key output parameters from across geographies. Use dropdown menus to select desired commodity (or group) and parameters to display. Toggle buttons at top right allow different geographic aggregations. Hover over countries or regions to observe the actual results.
            {/* </h2>The map shows change in key output parameters from <%= yearRange[0] %> to <%= yearRange[1] %> across geographies. Use dropdown menus to select desired commodity (or group) and parameters to display. Toggle buttons at top right allow different geographic aggregations. Hover over countries or regions to observe the actual results. */}
          </div>
          <a className='show-help' href='#'>i</a>
        </div>
      </div>
    )
  }
}

// Set default props
Map.propTypes = {

}

export default Map
