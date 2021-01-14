import React from 'react';

import styles from 'components/atoms/Meal/Meal.module.scss';

const Meal = ({ name, calories, protein, carbohydrate, fat }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperMeal}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.value}>{calories} kcal</h2>
      <h2 className={styles.value}>B: {protein}</h2>
      <h2 className={styles.value}>W: {carbohydrate}</h2>
      <h2 className={styles.value}>T: {fat}</h2>
    </div>
    <div className={styles.wrapperButton}>
      <button type="button" className={styles.button}>
        +
      </button>
    </div>
  </div>
);

export default Meal;
