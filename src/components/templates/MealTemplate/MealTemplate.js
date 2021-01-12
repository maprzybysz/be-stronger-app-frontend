import React from 'react';
import DateBar from 'components/molecules/DateBar/DateBar';
import MealPane from 'components/molecules/MealPane/MealPane';
import styles from 'components/templates/MealTemplate/MealTemplate.module.scss';
import NutritionBar from 'components/molecules/NutritionBar/NutritionBar';

const MealTemplate = () => (
  <div className={styles.wrapper}>
    <MealPane />
    <DateBar />
    <NutritionBar />
  </div>
);

export default MealTemplate;
