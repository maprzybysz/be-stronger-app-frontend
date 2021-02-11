import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from 'components/molecules/NutritionTopNav/NutritionTopNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faUtensils,
  faBook,
  faShoppingBasket,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const NutritionTopNav = () => (
  <div className={styles.wrapper}>
    <Link exact to="/" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <NavLink exact to="/nutrition" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faUtensils} />
    </NavLink>
    <NavLink to="/nutrition/mealsbook" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faBook} />
    </NavLink>
    <NavLink
      to="/nutrition/shoppinglist"
      className={styles.link}
      activeClassName={styles.linkActive}
    >
      <FontAwesomeIcon icon={faShoppingBasket} />
    </NavLink>
    <NavLink to="/nutrition/settings" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faCog} />
    </NavLink>
  </div>
);

export default NutritionTopNav;
