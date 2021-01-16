import React from 'react';
import DateBar from 'components/molecules/DateBar/DateBar';
import MealsPane from 'components/molecules/MealsPane/MealsPane';
import styles from 'components/templates/MealTemplate/MealTemplate.module.scss';
import NutritionBar from 'components/molecules/NutritionBar/NutritionBar';

const MealTemplate = () => (
  <div className={styles.wrapper}>
    <MealsPane />
    <DateBar />
    <NutritionBar />
  </div>
);

export default MealTemplate;
