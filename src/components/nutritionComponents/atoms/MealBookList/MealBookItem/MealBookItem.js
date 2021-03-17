import React from 'react';
import history from 'history/history';
import styles from 'components/nutritionComponents/atoms/MealBookList/MealBookItem/MealBookItem.module.scss';
import PropTypes from 'prop-types';

const MealBookItem = ({name}) => {

  const redirect = () => {
    history.push(`/nutrition/mealsbook/:${name}`)
  }
    return (
        <li className={styles.itemList} onClick={() => redirect()}>{name}</li>
    )
}
 
MealBookItem.propTypes = {
  name: PropTypes.string.isRequired
}
export default MealBookItem;

   
        