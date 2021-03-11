import React from 'react';
import PropTypes from 'prop-types'
import history from 'history/history';
import styes from 'components/blogComponents/atoms/ArticlesList/ArticleListItem/ArticleListItem.module.scss';

const ArticleListItem = ({title, imgUrl, id})=> (
  <li className={styes.wrapper} onClick={()=>{history.push(`/blog/article/${id}`)}}>
    <>
    <img src={imgUrl} alt={title} className={styes.img}/>
    <h1 className={styes.title}>{title}</h1>
    </>
  </li>
)

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ArticleListItem;
