import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/molecules/MealTime/MealTime.module.scss';
import MealList from 'components/atoms/MealList/MealList';
import { mealsSummary } from 'service/mealService';
import history from 'history/history';

const MealTime = ({ name,  visible, openFn, meals, path }) => {
  const { totalGoodness, totalProtein, totalCarbohydrates, totalFat } = mealsSummary(meals);
  return (
    <>
      <div className={styles.wrapperMeal}>
        <div className={styles.wrapperData} onClick={openFn}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.value}>{totalGoodness}kcal</h2>
          <h2 className={styles.value}>B:{totalProtein}g</h2>
          <h2 className={styles.value}>W:{totalCarbohydrates}g</h2>
          <h2 className={styles.value}>T:{totalFat}g</h2>
        </div>
        <div className={styles.wrapperButton}>
          <button type="button" className={styles.button} onClick={()=>history.push(`/nutrition/addMeal/:${path}`)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div>{visible ? <MealList meals={meals} /> : null}</div>
    </>
  );
};

MealTime.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  openFn: PropTypes.func.isRequired,
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
  ).isRequired,
};

export default MealTime;
