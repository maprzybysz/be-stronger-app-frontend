import React from 'react';
import { connect } from 'react-redux';
import { addFood } from 'actions';
import Meal from 'components/atoms/Meal/Meal';
import styles from 'components/molecules/MealsPane/MealsPane.module.scss';

const MealsPane = ({ addFood, ...props }) => (
  <div className={styles.wrapper}>
    {console.log('{ ...props }')};{console.log({ ...props })};
    <Meal name="Śnadanie" onClick={addFood} {...props} />
    <Meal name="Obiad" onClick={addFood} calories={0} protein={0} carbohydrate={0} fat={0} />
    <Meal name="Kolacja" calories={0} protein={0} carbohydrate={0} fat={0} />
    <Meal name="Przekąski" calories={0} protein={0} carbohydrate={0} fat={0} />
  </div>
);

const mapStateToProps = (state) => {
  const props = state;
  return props;
};

const mapDispatchToProps = (dispatch) => ({
  addFood: (food) => dispatch(addFood(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealsPane);
