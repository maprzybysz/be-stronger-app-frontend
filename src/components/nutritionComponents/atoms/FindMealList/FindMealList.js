import React from 'react';
import PropTypes from 'prop-types';
import FindMeal from 'components/nutritionComponents/atoms/FindMealList/FindMeal/FindMeal';
import styles from 'components/nutritionComponents/atoms/FindMealList/FindMealList.module.scss';

const FindMealList = ({ meals, mealTime, mealDate }) => (

<>
    {meals.length !== 0 ? (
      <ul className={styles.wrapper}>
        {meals.map((item) => (
          <FindMeal
            key={item.id}
            id={item.id}
            name={item.name}
            grammage={item.grammage}
            goodness={item.goodness}
            carbohydrates={item.carbohydrates}
            protein={item.protein}
            fat={item.fat}
            mealTime={mealTime}
            mealDate={mealDate}
         />
        ))}
      </ul>
    ) : null

    }
  </>
);

FindMealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      grammage: PropTypes.number,
      goodness: PropTypes.number,
    
    }),
  ),
  mealTime: PropTypes.string.isRequired, 
  mealDate: PropTypes.string.isRequired,
};
FindMealList.defaultProps = {
  meals: {},
};


export default FindMealList;
