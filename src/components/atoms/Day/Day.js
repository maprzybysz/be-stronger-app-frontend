import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/atoms/Day/Day.module.scss';

const Day = ({ dayMonth, month, day, onClick }) => (
  <div className={styles.wrapper} onClick={onClick}>
    <h1 className={styles.topDate}>
      {dayMonth} {month}
    </h1>
    <h2 className={styles.bottomDate}>{day}</h2>
  </div>
);

Day.propTypes = {
  dayMonth: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Day.defaultProps = {
  onClick: null,
};

export default Day;
