import React from 'react';
import styles from 'components/blogComponents/atoms/BlogCategories/BlogCategories.module.scss';
import { categories} from 'assets/globalVariables';
import BlogCategory from 'components/blogComponents/atoms/BlogCategories/BlogCategory/BlogCategory';
import trainingIMG from 'assets/img/trainingIMG.jpg';
import healthIMG from 'assets/img/healthIMG.jpg';
import dietIMG from 'assets/img/dietIMG.jpg';
import supplementIMG from 'assets/img/supplementIMG.jpg';
import runIMG from 'assets/img/runIMG.jpg';
import slimmingIMG from 'assets/img/slimmingIMG.jpg';

const img = [trainingIMG, healthIMG, dietIMG, supplementIMG, runIMG, slimmingIMG];


const BlogCategories = ()=> (

  <ul className={styles.wrapper}>
    {categories.map((item, index) => <BlogCategory key={item} category={item} background={img[index]} url={item}/>)}
  </ul>
)

export default BlogCategories;