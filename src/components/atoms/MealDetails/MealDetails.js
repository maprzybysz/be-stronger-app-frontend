import React from 'react';
import history from 'history/history';
import {connect} from 'react-redux';
import styles from 'components/atoms/MealDetails/MealDetails.module.scss';

const MealDetails = ({match, findMeals}) => {
    
    const mealName = match.params.mealname.slice(1, match.params.mealname.length)
    const findMeal = findMeals.filter((item)=> item.name === mealName)[0];

    
    return(
    <div className={styles.wrapper}>
    <p>{findMeal.name}</p>
    <p>{findMeal.goodness}</p>
    <p>{findMeal.protein}</p>
    <p>{findMeal.carbohydrates}</p>
    <p>{findMeal.fat}</p>
    <p>{findMeal.mealDetails.description}</p>
    <p>{findMeal.mealDetails.imgUrl}</p>
    <button type='button' onClick={()=>history.push('/nutrition/mealsbook')}>back</button>
    </div>
    )

}
   
   
  

    



    
const mapStateToProps = (state) => {
const props = state;
return props;
}

export default connect(mapStateToProps, null)(MealDetails);