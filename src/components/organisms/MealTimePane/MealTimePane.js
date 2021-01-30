import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealTime from 'components/molecules/MealTime/MealTime';

import styles from 'components/organisms/MealTimePane/MealTimePane.module.scss';
import { mealsSummary } from 'service/mealService';

const MealTimePane = ({ meals }) => {
  const [breakfastVisible, setBreakfastVisible] = useState(false);
  const [dinnerVisible, setDinnerVisible] = useState(false);
  const [supperVisible, setSupperVisible] = useState(false);
  const [snacksVisible, setSnacksVisible] = useState(false);

  const breakfastVisibleFn = () => {
    setBreakfastVisible(!breakfastVisible);
  };
  const dinnerVisibleFn = () => {
    setDinnerVisible(!dinnerVisible);
  };
  const supperVisibleFn = () => {
    setSupperVisible(!supperVisible);
  };
  const snacksVisibleFn = () => {
    setSnacksVisible(!snacksVisible);
  };

  const { breakfast, dinner, supper, snacks } = meals;
  mealsSummary(breakfast);
  return (
    <div className={styles.wrapper}>
      <MealTime
        name="Śniadanie"
        visible={breakfastVisible}
        openFn={breakfastVisibleFn}
        meals={breakfast}
        path='śniadanie'
      />
      <MealTime name="Obiad" visible={dinnerVisible} openFn={dinnerVisibleFn} meals={dinner} path='obiad'/>
      <MealTime name="Kolacja" visible={supperVisible} openFn={supperVisibleFn} meals={supper} path='kolacja'/>
      <MealTime name="Przekąski" visible={snacksVisible} openFn={snacksVisibleFn} meals={snacks} path='przekąska'/>
    </div>
  );
};
MealTimePane.propTypes = {
  meals: PropTypes.objectOf(PropTypes.array),
};
MealTimePane.defaultProps = {
  meals: [],
};
const mapStateToProps = (state) => {
  const props = state;

  return props;
};

export default connect(mapStateToProps, null)(MealTimePane);
