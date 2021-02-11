import React from 'react';
import DateBar from 'components/molecules/DateBar/DateBar';
import MealTimePane from 'components/organisms/MealTimePane/MealTimePane';
import styles from 'components/templates/MealTemplate/MealTemplate.module.scss';
import NutritionBar from 'components/molecules/NutritionBar/NutritionBar';


const MealTemplate = () => (
  <div className={styles.wrapper}>
    <MealTimePane/>
    <DateBar />
    <NutritionBar />
  </div>
);

export default MealTemplate;
