import React from 'react';
import Meal from 'components/atoms/Meal/Meal';
import styles from 'components/molecules/MealPane/MealPane.module.scss';

const MealPane = () => (
  <div className={styles.wrapper}>
    <Meal name="Śnadanie" calories={0} protein={100} carbohydrate={100} fat={100} />
    <Meal name="Obiad" calories={0} protein={0} carbohydrate={0} fat={0} />
    <Meal name="Kolacja" calories={0} protein={0} carbohydrate={0} fat={0} />
    <Meal name="Przekąski" calories={0} protein={0} carbohydrate={0} fat={0} />
  </div>
);

export default MealPane;
