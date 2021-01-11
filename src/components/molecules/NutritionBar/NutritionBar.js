import React from 'react';
import styles from 'components/molecules/NutritionBar/NutritionBar.module.scss';
import DailyValue from 'components/atoms/DailyValue/DailyValue';

const NutritionBar = () => (
  <div className={styles.wrapper}>
    <DailyValue name="Kalorie" value={199} maxValue={1000} className={styles.value} />
    <DailyValue name="Białka" value={199} maxValue={1000} className={styles.value} />
    <DailyValue name="Tł." value={199} maxValue={1000} className={styles.value} />
    <DailyValue name="Węgl." value={199} maxValue={1000} className={styles.value} />
  </div>
);

export default NutritionBar;
