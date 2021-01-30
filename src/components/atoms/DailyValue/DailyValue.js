import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/atoms/DailyValue/DailyValue.module.scss';

const DailyValue = ({ name, value, maxValue }) => (
  <div className={styles.wrapper}>
    <span className={styles.name}>{name} </span>
    <span className={styles.value}>
      {value}/{maxValue} {name === 'Kalorie' ? 'kcal' : 'g'}
    </span>
  </div>
);

DailyValue.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};
export default DailyValue;
