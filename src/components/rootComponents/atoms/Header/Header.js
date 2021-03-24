import React from 'react';
import header from 'assets/img/headernew.png';

import styles from 'components/rootComponents/atoms/Header/Header.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <img src={header} className={styles.logo} alt="logo be stronger" />
  </div>
);

export default Header;
