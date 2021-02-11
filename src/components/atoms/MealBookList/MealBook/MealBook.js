import React from 'react';
import history from 'history/history';
import styles from 'components/atoms/MealBookList/MealBook/MealBook.module.scss';

const MealBook = ({name}) => {

  const redirect = () => {
    history.push(`/nutrition/mealsbook/:${name}`)
  }
    return (
        <li className={styles.itemList} onClick={() => redirect()}>{name}</li>
    )
}
   
export default MealBook; 

   
        