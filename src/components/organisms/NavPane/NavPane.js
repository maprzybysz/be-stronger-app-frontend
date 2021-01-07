import React from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import NavPaneButton from 'components/molecules/NavPaneButton/NavPaneButton';
import styles from 'components/organisms/NavPane/NavPane.module.scss';

const NavPane = () => (
  <nav className={styles.wrapper}>
    <ul>
      <NavPaneButton iconName={faSignInAlt} linkPath="/">
        Login
      </NavPaneButton>
      <NavPaneButton iconName={faSignInAlt} linkPath="/nutrition">
        Odżywianie
      </NavPaneButton>
      <NavPaneButton iconName={faSignInAlt} linkPath="/training">
        Trening
      </NavPaneButton>
      <NavPaneButton iconName={faSignInAlt} linkPath="/blog">
        Blog
      </NavPaneButton>
    </ul>
  </nav>
);

export default NavPane;
