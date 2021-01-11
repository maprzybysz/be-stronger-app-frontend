import Day from 'components/atoms/Day/Day';
import React from 'react';
import styles from 'components/molecules/DateBar/DateBar.module.scss';

const DateBar = () => (
  <div className={styles.wrapper}>
    <span className={styles.arrow}>{'<'}</span>
    <Day />
    <Day />
    <Day />
    <span className={styles.arrow}>{'>'}</span>
  </div>
);

export default DateBar;
