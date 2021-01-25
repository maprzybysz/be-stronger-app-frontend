import React from 'react';
import { connect } from 'react-redux';
import { faDumbbell, faUser, faUtensils, faBook } from '@fortawesome/free-solid-svg-icons';
import NavPaneButton from 'components/molecules/NavPaneButton/NavPaneButton';
import styles from 'components/organisms/NavPane/NavPane.module.scss';

const NavPane = ({ username }) => (
  <nav className={styles.wrapper}>
    <ul>
      <NavPaneButton iconName={faUser} linkPath="/userdetails">
        {username}
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

const mapStateToProps = (state) => {
  const props = state;
  return props;
};

export default connect(mapStateToProps, null)(NavPane);
