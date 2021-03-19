import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from 'components/trainingComponents/molecules/TrainingTopNav/TrainingTopNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faUser,
  faHistory,
  faDumbbell,

} from '@fortawesome/free-solid-svg-icons';

const TrainingTopNav = () => (
  <div className={styles.wrapper}>
    <Link to="/" className={styles.link} >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <NavLink
      exact to="/training"
      className={styles.link}
      activeClassName={styles.linkActive}
    >
      <FontAwesomeIcon icon={faDumbbell} />
    </NavLink>

    <NavLink to="/training/history" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faHistory} />
    </NavLink>
    <NavLink exact to="/userdetails" className={styles.link} activeClassName={styles.linkActive}>
      <FontAwesomeIcon icon={faUser} />
    </NavLink>
  </div>
);

export default TrainingTopNav;