import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mealsSummary } from 'service/mealService';
import styles from 'components/nutritionComponents/molecules/NutritionBar/NutritionBar.module.scss';
import DailyValue from 'components/nutritionComponents/atoms/DailyValue/DailyValue';

const NutritionBar = ({ meals }) => {
  const { totalGoodness, totalProtein, totalCarbohydrates, totalFat } = mealsSummary(
    [].concat(meals.breakfast, meals.dinner, meals.supper, meals.snacks),
  );
  return (
    <div className={styles.wrapper}>
      <DailyValue name="Kalorie" value={totalGoodness} maxValue={1000} className={styles.value} />
      <DailyValue name="Białka" value={totalProtein} maxValue={1000} className={styles.value} />
      <DailyValue name="Tł." value={totalFat} maxValue={1000} className={styles.value} />
      <DailyValue
        name="Węgl."
        value={totalCarbohydrates}
        maxValue={1000}
        className={styles.value}
      />
    </div>
  );
};

NutritionBar.propTypes = {
  meals: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (state) => {
  const props = state;
  return props;
};

export default connect(mapStateToProps, null)(NutritionBar);
