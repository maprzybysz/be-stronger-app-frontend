import React from 'react';
import PropTypes from 'prop-types';
import Meal from 'components/atoms/MealList/Meal/Meal';
import styles from 'components/atoms/MealList/MealList.module.scss';

const MealList = ({ meals }) => (
  <>
    {meals.length !== 0 ? (
      <ul className={styles.wrapper}>
        {meals.map((item) => (
          <Meal
            key={item.id}
            id={item.id}
            name={item.mealName}
            grammage={item.totalGrammage}
            goodness={item.totalGoodness}
            protein={item.totalProtein}
            carbohydrates={item.totalCarbohydrates}
            fat={item.totalFat}
          />
        ))}
      </ul>
    ) : (
      <h1 className={styles.noItems}>nie znaleziono produktów - musisz coś dodać :)</h1>
    )}
  </>
);

MealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      grammage: PropTypes.number,
      goodness: PropTypes.number,
      protein: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
    }),
  ),
};
MealList.defaultProps = {
  meals: {},
};
export default MealList;
