import React from 'react';
import DateBar from 'components/nutritionComponents/molecules/DateBar/DateBar';
import MealTimePane from 'components/nutritionComponents/organisms/MealTimePane/MealTimePane';
import styles from 'components/templates/MealEatenTemplate/MealEatenTemplate.module.scss';
import NutritionBar from 'components/nutritionComponents/molecules/NutritionBar/NutritionBar';


const MealEatenTemplate = () => (
  <div className={styles.wrapper}>
    <MealTimePane/>
    <DateBar />
    <NutritionBar />
  </div>
);

export default MealEatenTemplate;
