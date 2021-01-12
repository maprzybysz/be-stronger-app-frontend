import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <NavLink to="/" className={styles.link}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </NavLink>
    <NavLink to="/nutrition" className={styles.link}>
      <FontAwesomeIcon icon={faUtensils} />
    </NavLink>
    <NavLink to="/nutrition/recipes" className={styles.link}>
      <FontAwesomeIcon icon={faBook} />
    </NavLink>
    <NavLink to="/nutrition/shoppinglist" className={styles.link}>
      <FontAwesomeIcon icon={faShoppingBasket} />
    </NavLink>
    <NavLink to="/nutrition/settings" className={styles.link}>
      <FontAwesomeIcon icon={faCog} />
    </NavLink>
  </div>
);

export default NutritionTopNav;
