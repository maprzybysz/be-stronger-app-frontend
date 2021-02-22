import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUser, faUtensils, faBook } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import styles from 'components/rootComponents/atoms/NavPaneButton/NavPaneButton.module.scss';

const NavPaneButton = ({ children, iconName, linkPath, onClick }) => (
  <li>
    <NavLink to={linkPath} onClick={onClick} className={styles.link}>
      <FontAwesomeIcon icon={iconName} className={styles.icon} />
      {children}
    </NavLink>
  </li>
);

NavPaneButton.propTypes = {
  children: PropTypes.string,
  iconName: PropTypes.oneOf([faDumbbell, faUser, faUtensils, faBook]).isRequired,
  linkPath: PropTypes.string,
  onClick: PropTypes.func,
};
NavPaneButton.defaultProps = {
  children: null,
  linkPath: '/',
  onClick: null,
};
export default NavPaneButton;
