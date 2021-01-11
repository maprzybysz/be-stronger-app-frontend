import React from 'react';
import DateBar from 'components/molecules/DateBar/DateBar';
import MealPane from 'components/molecules/MealPane/MealPane';
import styles from 'components/organisms/NutritionPane/NutritionPane.module.scss';
import NutritionBar from 'components/atoms/NutritionBar/NutritionBar';

const NutritionPane = () => (
  <div className={styles.wrapper}>
    <DateBar />
    <MealPane />
    <NutritionBar />
  </div>
);

export default NutritionPane;
