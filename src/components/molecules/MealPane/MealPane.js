import React from 'react';
import { connect } from 'react-redux';
import Meal from 'components/atoms/Meal/Meal';
import styles from 'components/molecules/MealPane/MealPane.module.scss';

const MealPane = (props) => (
  <div className={styles.wrapper}>
    {console.log({ props })}
    <Meal name="Śnadanie" calories={props.calories} protein={100} carbohydrate={100} fat={100} />
    <Meal name="Obiad" calories={0} protein={0} carbohydrate={0} fat={0} />
    <Meal name="Kolacja" calories={0} protein={0} carbohydrate={0} fat={0} />
    <Meal name="Przekąski" calories={0} protein={0} carbohydrate={0} fat={0} />
  </div>
);

const mapStateToProps = (state) => {
  const { calories } = state;
  return { calories };
};

export default connect(mapStateToProps)(MealPane);
