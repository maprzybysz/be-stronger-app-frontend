import React from 'react';
import PropTypes from 'prop-types';
import FindMeal from 'components/atoms/FindMealList/FindMeal/FindMeal';
import styles from 'components/atoms/FindMealList/FindMealList.module.scss';

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
};
FindMealList.defaultProps = {
  meals: {},
};
export default FindMealList;
