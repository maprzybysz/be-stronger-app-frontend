import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getArticlesByCategory } from 'actions/index';
import ArticleListItem from 'components/blogComponents/atoms/ArticlesList/ArticleListItem/ArticleListItem';
import styes from 'components/blogComponents/atoms/ArticlesList/ArticlesList.module.scss';

const ArticlesList = ({match, getArticlesByCategory, articles}) => {

  const category = match.params.categories.slice(1, match.params.categories.length)

  useEffect(()=>{
    getArticlesByCategory(category)
  }, [])

  return(
    <ul className={styes.wrapper}>
      { articles.length>0 ?
        articles.map(item => <ArticleListItem title={item.title} imgUrl={item.imgUrl} key={item.id} id={item.id}/>)
        :<p className={styes.empty}>Brak artykułów w tej kategorii :(</p>
      }
    </ul>
  )
}

ArticlesList.propTypes= {
  match: PropTypes.shape({params: PropTypes.shape({categories: PropTypes.string})}).isRequired,
  getArticlesByCategory: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({


    }),
  ).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  getArticlesByCategory: (category) => dispatch(getArticlesByCategory(category)),
})

const mapStateToProps = ({articles}) => ({
  articles
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);