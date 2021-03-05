import React from 'react';
import PropTypes from 'prop-types';
import history from 'history/history';
import styles from 'components/blogComponents/atoms/BlogCategories/BlogCategory/BlogCategory.module.scss';



const BlogCategory = ({category, background, url}) => (
  <li className={styles.item} style={{backgroundImage: `url(${background})`}} onClick={()=>history.push(`/blog/:${url}`)}>{category}</li>
)

BlogCategory.propTypes = {
  category: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default BlogCategory;