'use strict'
import React from 'react'
import { Link } from 'react-router'

export class Home extends React.Component {
  render () {
    return (
      <section className='page__home'>
        <header className='home__header'>
          <div className='row row--shortened'>
            <div className='home__header-split--left'>
              <div className='home__header-split--left__content'>
                <h2 className='header--xxxlarge'>Answering Questions About Our World’s Food Supply</h2>
                <p className='header__metadata'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet ligula aliquam. Lorem ipsum dolor sit amet, consectetur elit.</p>
              </div>
            </div>
            <div className='home__header-split--right'>
              <Link className='button button--outline' to={'/'}>Learn More</Link>
              <Link className='button button--outline' to={'/'}>View Briefs</Link>
            </div>
          </div>
        </header>
        <section className='section__internal'>
          <div className='row row--shortened'>
            <header className='header-internal'>
              <h3 className='header--xlarge with-description'>Featured Projects</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dui gravida, posuere diam id, congue augue. Pellentesque nec purus ex.</p>
            </header>
            <ul>
              <li className='featured-project__item featured-project__item--settings'>
                <div className='featured-project__item--body'>
                  <h4 className='header--large'>Drought Tolerant Beans and Climate Change</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut dolor. Etiam sit amet elit volutpat, tempus nisl non, sem. Etiam sit amet elit volutpat, tempus nisl non…</p>
                  <Link className='link-block' to={'/'}>View All Related Scenarios</Link>
                </div>
              </li>
              <li className='featured-project__item featured-project__item--energy'>
                <div className='featured-project__item--body'>
                  <h4 className='header--large'>Drought Tolerant Beans and Climate Change</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut dolor. Etiam sit amet elit volutpat, tempus nisl non, sem. Etiam sit amet elit volutpat, tempus nisl non…</p>
                  <Link className='link-block' to={'/'}>View All Related Scenarios</Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className='page__related-articles-list section__padding'>
          <div className='row row--shortened'>
            <header className='header-internal'>
              <h4 className='header--large'>Recently Added Briefs</h4>
            </header>
            <ul>
              <li className='article-card--related'>
                <h5 className='header--small'>Drought Tolerant Beans and Climate Change</h5>
                <div className='article-card__body--related'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut….</p>
                  <ul className='related__card__tags'>
                    <li><Link to={'/'}>tag 1,</Link></li>
                    <li><Link to={'/'}>tag 2,</Link></li>
                    <li><Link to={'/'}>tag 3,</Link></li>
                    <li><Link to={'/'}>tag 4,</Link></li>
                  </ul>
                </div>
              </li>
              <li className='article-card--related'>
                <h5 className='header--small'>Drought Tolerant Beans and Climate Change</h5>
                <div className='article-card__body--related'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut….</p>
                  <ul className='related__card__tags'>
                    <li><Link to={'/'}>tag 1,</Link></li>
                    <li><Link to={'/'}>tag 2,</Link></li>
                    <li><Link to={'/'}>tag 3,</Link></li>
                    <li><Link to={'/'}>tag 4,</Link></li>
                  </ul>
                </div>
              </li>
              <li className='article-card--related'>
                <h5 className='header--small'>Drought Tolerant Beans and Climate Change</h5>
                <div className='article-card__body--related'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a molestie sapien. Sed ac nunc vel risus luctus suscipit ut ut….</p>
                  <ul className='related__card__tags'>
                    <li><Link to={'/'}>tag 1,</Link></li>
                    <li><Link to={'/'}>tag 2,</Link></li>
                    <li><Link to={'/'}>tag 3,</Link></li>
                    <li><Link to={'/'}>tag 4,</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
            <Link className='button button--main button--more-information' to={'/'}>View All Briefs</Link>
          </div>
        </section>
      </section>
    )
  }
}

export default Home
