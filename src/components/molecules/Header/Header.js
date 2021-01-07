import React from 'react';
import HeaderLogo from 'components/atoms/HeaderLogo/HeaderLogo';
import HeaderTitle from 'components/atoms/HeaderTitle/HeaderTitle';
import styles from 'components/molecules/Header/Header.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <HeaderLogo />
    <HeaderTitle />
  </div>
);

export default Header;
