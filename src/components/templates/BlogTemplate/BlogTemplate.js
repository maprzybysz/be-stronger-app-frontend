import React from 'react';
import styles from 'components/templates/BlogTemplate/BlogTemplate.module.scss';
import BlogCategories from 'components/blogComponents/atoms/BlogCategories/BlogCategories';

const BlogTemplate = () => (
  <div className={styles.wrapper}>
    <BlogCategories/>
  </div>
);

export default BlogTemplate;
