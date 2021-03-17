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

const UserDetailsTopNav = () => (
  <div className={styles.wrapper}>
    <Link  to="/" className={styles.link}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <NavLink to="/userdetails" className={styles.link} activeClassName={styles.linkActive}>
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

export default UserDetailsTopNav;