import React from 'react';
import { faDumbbell, faSignInAlt, faUtensils, faBook } from '@fortawesome/free-solid-svg-icons';
import NavPaneButton from 'components/molecules/NavPaneButton/NavPaneButton';
import styles from 'components/organisms/NavPane/NavPane.module.scss';
import AppContext from 'context';

const NavPane = () => (
  <AppContext.Consumer>
    {(context) => (
      <nav className={styles.wrapper}>
        <ul>
          <NavPaneButton iconName={faSignInAlt} linkPath="/" onClick={context.handleOpenLoginModal}>
            Login
          </NavPaneButton>
          <NavPaneButton iconName={faUtensils} linkPath="/nutrition">
            Odżywianie
          </NavPaneButton>
          <NavPaneButton iconName={faDumbbell} linkPath="/training">
            Trening
          </NavPaneButton>
          <NavPaneButton iconName={faBook} linkPath="/blog">
            Blog
          </NavPaneButton>
        </ul>
      </nav>
    )}
  </AppContext.Consumer>
);

export default NavPane;
