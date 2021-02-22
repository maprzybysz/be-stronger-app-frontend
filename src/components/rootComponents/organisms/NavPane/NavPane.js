import React from 'react';
import {getUsername} from 'service/cookieService'
import { faDumbbell, faUser, faUtensils, faBook } from '@fortawesome/free-solid-svg-icons';
import NavPaneButton from 'components/rootComponents/atoms/NavPaneButton/NavPaneButton';
import styles from 'components/rootComponents/organisms/NavPane/NavPane.module.scss';

const NavPane = () => (
  <nav className={styles.wrapper}>
    <ul>
      <NavPaneButton iconName={faUser} linkPath="/userdetails">
        {getUsername()}
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
);





export default NavPane;
