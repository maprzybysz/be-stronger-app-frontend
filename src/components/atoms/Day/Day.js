import React from 'react';
import styles from 'components/atoms/Day/Day.module.scss';

const Day = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.topDate}>11 sty</h1>
    <h2 className={styles.bottomDate}>Poniedziałek</h2>
  </div>
);

export default Day;
