'use strict'
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router'

// Actions
import { fetchArticle } from '../actions'

// Components
import ProjectArticles from '../components/project-articles'
import RelatedArticles from '../components/related-articles'
import Loading from '../components/loading'

const Brief = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    articles: React.PropTypes.array,
    fetchArticle: React.PropTypes.func,
    articleLoading: React.PropTypes.bool,
    article: React.PropTypes.string,
    params: React.PropTypes.object
  },

  componentWillMount: function () {
    this.metadata = this.props.articles.find((article) => article.id === this.props.params.id)
    this.props.dispatch(fetchArticle(this.metadata.url))
  },

  render: function () {
    const articleMetadata = this.metadata
    const articles = this.props.articles
    const date = moment(articleMetadata.date, 'M/D/YYYY').format('MMMM Do, YYYY')
    return (
      <div className='page__article'>
        <section className='header__internal'>
          <div className='header-split--left'>
            <h2 className='header--xlarge'>{articleMetadata.title}</h2>
            <ul className='article-byline'>
              <li>{date}</li>
              <li>{articleMetadata.author}</li>
            </ul>
          </div>
          <div className='header-split--right'>
            <Link to={'/'} className='button button--outline'>Download Report</Link>
            <Link to={'/'} className='button button--outline'>Share</Link>
          </div>
        </section>
        {this.props.articleLoading
         ? <Loading />
         : <section>
             <div className='row'>
               <div dangerouslySetInnerHTML={{__html: this.props.article}}></div>
             </div>
           </section>
        }
        <ProjectArticles articleMetadata={articleMetadata} articles={articles} />
        <RelatedArticles articleMetadata={articleMetadata} articles={articles} />
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchArticle: (url) => {
      dispatch(fetchArticle(url))
    }
  })
}

const mapStateToProps = (state) => {
  return {
    articles: state.article.briefs,
    articleLoading: state.article.articleLoading,
    article: state.article.article
  }
}
export default connect(mapStateToProps)(Brief)
