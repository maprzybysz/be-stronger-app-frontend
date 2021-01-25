import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/atoms/Meal/Meal.module.scss';

const Meal = ({ name, grammage, goodness, protein, carbohydrates, fat }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.name}>{name} </h1>
    {grammage}g, kcal: {goodness}, B: {protein}, W: {carbohydrates}, T:{fat}
  </div>
);

Meal.propTypes = {
  name: PropTypes.string,
  grammage: PropTypes.number,
  goodness: PropTypes.number,
  protein: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
};

Meal.defaultProps = {
  name: 'produkt nieznany',
  grammage: 0,
  goodness: 0,
  protein: 0,
  carbohydrates: 0,
  fat: 0,
};

export default Meal;
