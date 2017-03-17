'use strict'
import React from 'react'
import Collapse  from 'rc-collapse'
import _ from 'lodash'

// Utils
import { translate } from '../utils/translation'

class BrowseFilter extends React.Component {
  render () {
    console.log(this.props);
    const { name, list } = this.props.filter
    const { handleFilterSelection, articleFilters } = this.props
    if (this.props.filter.accordion) {
      return <div>Test</div>
    } else {
      return (
        <fieldset>
          <legend>{name}</legend>
          <ul className='filters__main-check-group'>
            {list.map(li => <li key={li}><input type="checkbox" name={`${li}-check`} value={li} onChange={handleFilterSelection} checked={_.includes(articleFilters, li) }/><label>{translate(li)}</label></li>)}
          </ul>
        </fieldset>
      )
    }
    //
    // {this.filter.map(filter => {
    //   return (
    //     <fieldset>
    //       <legend>{filter.name}</legend>
    //       <div className='filters__check-group'>
    //         <Collapse
    //           accordion={accordion}
    //           onChange={this.onAccordionChange} >
    //           {this.generateAccordionItems(acc.list)}
    //         </Collapse>
    //       </div>
    //     </fieldset>
    //   )
    // })}
    //
    // <fieldset>
    //   <legend>Location</legend>
    //   <div className='filters__check-group'>
    //     <Collapse
    //       accordion={accordion}
    //       onChange={this.onAccordionChange}>
    //       {this.generateAccordionItems(this.locationList)}
    //     </Collapse>
    //   </div>
    // </fieldset>
    //         <fieldset>
    //                 <legend>{filter.name}</legend>
    //                 <div className='filters__check-group'>
    //                   <Collapse
    //                     accordion={accordion}
    //                     onChange={this.onAccordionChange} >
    //                     {this.generateAccordionItems(acc.list)}
    //                   </Collapse>
    //                 </div>
    //               </fieldset>
    //
    //               <fieldset>
    //                 <legend>Projects</legend>
    //                 <ul className='filters__main-check-group'>
    //                   {filterCategories.projects.map((project, i) => {
    //                     return (
    //                       <li key={'project-' + i}>
    //                         <input
    //                           type='checkbox'
    //                           name={project + '-check'}
    //                           value={project}
    //                           onChange={this.handleFilterSelection}
    //                           checked={_.includes(this.props.articleFilters, project) } />
    //                         <label>{project}</label>
    //                       </li>
    //                     )
    //                   })}
    //                 </ul>
    //               </fieldset>
    //               <fieldset>
    //                 <legend>Projects</legend>
    //                 <ul className='filters__main-check-group'>
    //                   {filterCategories.projects.map((project, i) => {
    //                     return (
    //                       <li key={'project-' + i}>
    //                         <input
    //                           type='checkbox'
    //                           name={project + '-check'}
    //                           value={project}
    //                           onChange={this.handleFilterSelection}
    //                           checked={_.includes(this.props.articleFilters, project) } />
    //                         <label>{project}</label>
    //                       </li>
    //                     )
    //                   })}
    //                 </ul>
    //               </fieldset>
  }
}

BrowseFilter.propTypes = {
  filter: React.PropTypes.object,
  accordion: React.PropTypes.bool,
  articleFilters: React.PropTypes.array,
  onAccordionChange: React.PropTypes.func,
  handleFilterSelection: React.PropTypes.func,
  generateAccordionItems: React.PropTypes.func
}

export default BrowseFilter
