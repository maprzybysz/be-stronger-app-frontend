import React from 'react';
import MealBookItem from 'components/nutritionComponents/atoms/MealBookList/MealBookItem/MealBookItem';
import styles from 'components/nutritionComponents/atoms/MealBookList/MealBookList.module.scss';
import PropTypes from 'prop-types';


const MealBookList = ({meals}) => (
  <>
    {meals.length !== 0 ? (
      <ul className={styles.wrapper}>
        {meals.map((item) => (
          <MealBookItem
            key={item.id}
            id={item.id}
            name={item.name}
       />
        ))}
      </ul>
    ) : null 
    }

    </>

   
);

MealBookList.propTypes = {
  // meals: PropTypes.instanceOf(PropTypes.array).isRequired
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      grammage: PropTypes.number,
      goodness: PropTypes.number,
    
    }),
  ).isRequired
}

export default MealBookList; 




