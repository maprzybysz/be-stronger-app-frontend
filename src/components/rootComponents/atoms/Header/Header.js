import React from 'react';
import header from 'assets/img/header.png';

import styles from 'components/rootComponents/atoms/Header/Header.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <img src={header} className={styles.logo} alt="logo be stronger" />
    <h1 className={styles.title}> BE STRONGER</h1>;
  </div>
);

export default Header;
