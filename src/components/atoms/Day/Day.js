import React from 'react';
import styles from 'components/atoms/Day/Day.module.scss';

const Day = ({ dayMonth, month, day }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.topDate}>
      {dayMonth} {month}
    </h1>
    <h2 className={styles.bottomDate}>{day}</h2>
  </div>
);

export default Day;
