import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFood } from 'actions';
import MealTime from 'components/molecules/MealTime/MealTime';

import styles from 'components/organisms/MealTimePane/MealTimePane.module.scss';

const MealTimePane = () => {
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
  return (
    <div className={styles.wrapper}>
      <MealTime name="Śnadanie" visible={breakfastVisible} openFn={breakfastVisibleFn} />
      <MealTime name="Obiad" visible={dinnerVisible} openFn={dinnerVisibleFn} />
      <MealTime name="Kolacja" visible={supperVisible} openFn={supperVisibleFn} />
      <MealTime name="Przekąski" visible={snacksVisible} openFn={snacksVisibleFn} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const props = state;
  return props;
};

const mapDispatchToProps = (dispatch) => ({
  addFood: (food) => dispatch(addFood(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealTimePane);