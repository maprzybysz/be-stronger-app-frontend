import React from 'react';
import header from 'assets/img/header.png';
import styles from 'components/atoms/HeaderLogo/HeaderLogo.module.scss';

const HeaderLogo = () => <img src={header} className={styles.logo} alt="logo be stronger" />;

export default HeaderLogo;
