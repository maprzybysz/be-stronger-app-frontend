import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from 'components/nutritionComponents/molecules/NutritionTopNav/NutritionTopNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faUser,
  faUtensils,
  faBook,
  faDumbbell,

} from '@fortawesome/free-solid-svg-icons';

const BlogTopNav = () => (
  <div className={styles.wrapper}>
    <Link exact to="/" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <NavLink exact to="/userdetails" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faUser} />
    </NavLink>
    <NavLink to="/nutrition" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faUtensils} />
    </NavLink>
    <NavLink
      to="/training"
      className={styles.link}
      activeClassName={styles.linkActive}
    >
      <FontAwesomeIcon icon={faDumbbell} />
    </NavLink>
    <NavLink to="/blog" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faBook} />
    </NavLink>
  </div>
);

export default BlogTopNav;