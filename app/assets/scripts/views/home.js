'use strict'
import React from 'react'
import { Link } from 'react-router'

export class Home extends React.Component {
  render () {
    return (
      <div className='page__home'>
        <header className='home__header'>
          <div className='row'>
            <div className='home__header-split--left'>
              <div className='home__header-split--left__content'>
                <h2 className='header--xxxlarge'>Answering Questions About Our World’s Food Supply</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur elit.</p>
              </div>
            </div>
            <div className='home__header-split--right'>
              <Link className='button button--outline' to={'/'}>Learn More</Link>
              <Link className='button button--outline' to={'/'}>View Briefs</Link>
            </div>
          </div>
        </header>
        <section>
          <div className='row'>
            <h3 className='header--xlarge'>Featured Projects</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui gravida, posuere diam id, congue augue. Pellentesque nec purus ex.</p>
            <ul>
              <li>
                <h4 className='header--large'>Drought Tolerant Beans and Climate Change</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut dolor. Etiam sit amet elit volutpat, tempus nisl non, sem. Etiam sit amet elit volutpat, tempus nisl non…</p>
                <Link to={'/'}>View All Related Scenarios</Link>
              </li>
              <li>
                <h4 className='header--large'>Drought Tolerant Beans and Climate Change</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut dolor. Etiam sit amet elit volutpat, tempus nisl non, sem. Etiam sit amet elit volutpat, tempus nisl non…</p>
                <Link to={'/'}>View All Related Scenarios</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className='section__secondary'>
          <div className='row'>
            <h4 className='header--large'>Recently Added Briefs</h4>
            <ul>
              <li>
                <h5 className='header--medium'>Drought Tolerant Beans and Climate Change</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut….</p>
                <ul>
                  <li><Link to={'/'}>tag 1</Link></li>
                  <li><Link to={'/'}>tag 2</Link></li>
                  <li><Link to={'/'}>tag 3</Link></li>
                  <li><Link to={'/'}>tag 4</Link></li>
                </ul>
              </li>
              <li>
                <h5 className='header--medium'>Drought Tolerant Beans and Climate Change</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut….</p>
                <ul>
                  <li><Link to={'/'}>tag 1</Link></li>
                  <li><Link to={'/'}>tag 2</Link></li>
                  <li><Link to={'/'}>tag 3</Link></li>
                  <li><Link to={'/'}>tag 4</Link></li>
                </ul>
              </li>
              <li>
                <h5 className='header--medium'>Drought Tolerant Beans and Climate Change</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut….</p>
                <ul>
                  <li><Link to={'/'}>tag 1</Link></li>
                  <li><Link to={'/'}>tag 2</Link></li>
                  <li><Link to={'/'}>tag 3</Link></li>
                  <li><Link to={'/'}>tag 4</Link></li>
                </ul>
              </li>
            </ul>
            <Link className='button button--main' to={'/'}>View All Briefs</Link>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
