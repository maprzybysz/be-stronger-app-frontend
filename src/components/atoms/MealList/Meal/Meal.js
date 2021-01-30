import React from 'react';
import { connect } from 'react-redux';
import { deleteMeal } from 'actions';
import PropTypes from 'prop-types';
import styles from 'components/atoms/MealList/Meal/Meal.module.scss';

const Meal = ({ name, grammage, goodness, protein, carbohydrates, fat, id, deleteMeal}) => (
  <div className={styles.wrapper}>
    <div className={styles.meal}>
      <h1 className={styles.name}>{name} </h1>
      {grammage}g, kcal: {goodness}, B: {protein}, W: {carbohydrates}, T:{fat}
    </div>
    <button type="button" className={styles.button} onClick={() => deleteMeal(id)}>
      X
    </button>
  </div>
);

Meal.propTypes = {
  name: PropTypes.string,
  grammage: PropTypes.number,
  goodness: PropTypes.number,
  protein: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  deleteMeal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Meal.defaultProps = {
  name: 'produkt nieznany',
  grammage: 0,
  goodness: 0,
  protein: 0,
  carbohydrates: 0,
  fat: 0,
};

const mapDispatchToProps = (dispatch) => ({
  deleteMeal: (id) => dispatch(deleteMeal(id)),
});



export default connect(null, mapDispatchToProps)(Meal);
