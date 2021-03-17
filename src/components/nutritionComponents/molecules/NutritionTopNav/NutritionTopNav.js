import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from 'components/nutritionComponents/molecules/NutritionTopNav/NutritionTopNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faUtensils,
  faBreadSlice,
  faShoppingBasket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const NutritionTopNav = () => (
  <div className={styles.wrapper}>
    <Link  to="/" className={styles.link} >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <NavLink exact to="/nutrition" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faUtensils} />
    </NavLink>
    <NavLink to="/nutrition/mealsbook" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faBreadSlice} />
    </NavLink>
    <NavLink
      to="/nutrition/shoppinglist"
      className={styles.link}
      activeClassName={styles.linkActive}
    >
      <FontAwesomeIcon icon={faShoppingBasket} />
    </NavLink>
    <NavLink to="/userdetails" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faUser} />
    </NavLink>
  </div>
);

export default NutritionTopNav;
