import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from 'components/nutritionComponents/atoms/MealDetails/MealDetails.module.scss';

const MealDetails = ({match, findMeals}) => {
    
    const mealName = match.params.mealname.slice(1, match.params.mealname.length)
    const findMeal = findMeals.filter((item)=> item.name === mealName)[0];

    
    return(
    <div className={styles.wrapper}>
    <div className={styles.top}>
        <h1 className={styles.name}>{findMeal.name}</h1>
    </div>
    <div className={styles.content}>
        <p className={styles.grammage}>Wartości odżywcze na 100g</p>
            <p className={styles.contentItem}>Kalorie: {findMeal.goodness}kcal</p>
            <p className={styles.contentItem}>Białko: {findMeal.protein}g</p>
            <p className={styles.contentItem}>Węglowodany: {findMeal.carbohydrates}g</p>
            <p className={styles.contentItem}>Tłuszcze: {findMeal.fat}g</p>
        { findMeal.description ? <p className={styles.contentItem}>Opis: {findMeal.description}</p> : null}
    </div>
        <div className={styles.about}>Utworzono przez: {findMeal.author} {findMeal.createDate}</div>
    
    </div>
    )

}
   
MealDetails.propTypes = {
    match: PropTypes.shape({params: PropTypes.shape({mealname: PropTypes.string})}).isRequired,
    findMeals: PropTypes.arrayOf(
    PropTypes.shape({
        
    
    }),
  ).isRequired,
}

const mapStateToProps = (state) => {
const props = state;
return props;
}


export default connect(mapStateToProps, null)(MealDetails);