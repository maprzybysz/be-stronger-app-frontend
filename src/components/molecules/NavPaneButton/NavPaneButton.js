import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from 'components/molecules/NavPaneButton/NavPaneButton.module.scss';

const NavPaneButton = ({ children, iconName, linkPath, onClick }) => (
  <li className={styles.link}>
    <NavLink to={linkPath} onClick={onClick}>
      <FontAwesomeIcon icon={iconName} />
      {children}
    </NavLink>
  </li>
);

NavPaneButton.propTypes = {
  children: PropTypes.string,
  iconName: PropTypes.instanceOf(FontAwesomeIcon).isRequired,
  linkPath: PropTypes.string,
  onClick: PropTypes.func,
};
NavPaneButton.defaultProps = {
  children: null,
  linkPath: '/',
  onClick: null,
};
export default NavPaneButton;
