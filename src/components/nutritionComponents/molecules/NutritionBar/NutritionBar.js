import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mealsSummary } from 'service/mealService';
import styles from 'components/nutritionComponents/molecules/NutritionBar/NutritionBar.module.scss';
import DailyValue from 'components/nutritionComponents/atoms/DailyValue/DailyValue';

const NutritionBar = ({ meals, userTMR }) => {
  const { totalGoodness, totalProtein, totalCarbohydrates, totalFat } = mealsSummary(
    [].concat(meals.breakfast, meals.dinner, meals.supper, meals.snacks),
  );
  return (
    <div className={styles.wrapper}>
      <DailyValue name="Kalorie" value={totalGoodness} maxValue={Math.round(userTMR.tmr)}  />
      <DailyValue name="Białko" value={totalProtein} maxValue={Math.round(userTMR.protein)}  />
      <DailyValue name="Tł." value={totalFat} maxValue={Math.round(userTMR.fat)} />
      <DailyValue
        name="Węgl."
        value={totalCarbohydrates}
        maxValue={Math.round(userTMR.carbohydrates)}
      />
    </div>
  );
};

NutritionBar.propTypes = {
  meals: PropTypes.shape({
    breakfast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        mealName: PropTypes.string,
        mealTime: PropTypes.string,
        mealDate: PropTypes.string,
        totalGrammage: PropTypes.number,
        totalGoodness: PropTypes.number,
        totalProtein: PropTypes.number,
        totalCarbohydrates: PropTypes.number,
        totalFat: PropTypes.number
      })
    ),
    dinner: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        mealName: PropTypes.string,
        mealTime: PropTypes.string,
        mealDate: PropTypes.string,
        totalGrammage: PropTypes.number,
        totalGoodness: PropTypes.number,
        totalProtein: PropTypes.number,
        totalCarbohydrates: PropTypes.number,
        totalFat: PropTypes.number
      })),
    supper: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        mealName: PropTypes.string,
        mealTime: PropTypes.string,
        mealDate: PropTypes.string,
        totalGrammage: PropTypes.number,
        totalGoodness: PropTypes.number,
        totalProtein: PropTypes.number,
        totalCarbohydrates: PropTypes.number,
        totalFat: PropTypes.number
      })),
    snacks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      mealName: PropTypes.string,
      mealTime: PropTypes.string,
      mealDate: PropTypes.string,
      totalGrammage: PropTypes.number,
      totalGoodness: PropTypes.number,
      totalProtein: PropTypes.number,
      totalCarbohydrates: PropTypes.number,
      totalFat: PropTypes.number
    }))
    }).isRequired,
  userTMR:
    PropTypes.shape({
      tmr: PropTypes.number,
      protein:PropTypes.number,
      fat:PropTypes.number,
      carbohydrates: PropTypes.number
    }).isRequired,
};

const mapStateToProps = (state) => {
  const props = state;
  return props;
};

export default connect(mapStateToProps, null)(NutritionBar);
