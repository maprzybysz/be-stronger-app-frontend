import React from 'react';
import history from 'history/history';
import styles from 'components/nutritionComponents/atoms/MealBookList/MealBook/MealBook.module.scss';
import PropTypes from 'prop-types';

const MealBook = ({name}) => {

  const redirect = () => {
    history.push(`/nutrition/mealsbook/:${name}`)
  }
    return (
        <li className={styles.itemList} onClick={() => redirect()}>{name}</li>
    )
}
 
MealBook.propTypes = {
  name: PropTypes.string.isRequired
}
export default MealBook; 

   
        