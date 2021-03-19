import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getArticleById } from 'actions/index';
import styles from 'components/blogComponents/atoms/Article/Article.module.scss';

const Article = ({match, getArticleById, article}) => {

  const { id } = match.params;

  useEffect(()=>{
    getArticleById(id);
  }, [])

  return(

    <div className={styles.wrapper}>
    <img src={article.url} alt='articleIMG' className={styles.img}/>
    <h1 className={styles.title}>{article.title}</h1>
    <div className={styles.content}>{article.content} {article.content}</div>
    </div>

  )
}

Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    createDate: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  getArticleById: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired
}

const mapDispatchToProps = (dispatch) => ({
  getArticleById: (id) => dispatch(getArticleById(id)),
})

const mapStateToProps = ({article}) => ({
  article
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);