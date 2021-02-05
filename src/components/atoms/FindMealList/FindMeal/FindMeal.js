import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEatenMeal} from 'actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/atoms/FindMealList/FindMeal/FindMeal.module.scss';

const FindMeal = ({ name,  goodness, grammage, carbohydrates, protein, fat, addEatenMeal, mealDate, mealTime}) => {
 
  const [visible, setVisible] = useState(false);
const [totalGrammage, setTotalGrammage] = useState(100);
const totalGoodness = Math.floor(goodness*(totalGrammage/100));
const totalCarbohydrates = Math.floor(carbohydrates*(totalGrammage/100));
const totalProtein = Math.floor(protein*(totalGrammage/100))
const totalFat = Math.floor(fat*(totalGrammage/100))

const re = /^[0-9._\b]+$/;
  return (
  <div className={styles.wrapper}>
    <div className={styles.meal} onClick={()=>setVisible(!visible)}>
      <h1 className={styles.name}>{name} </h1>
      {!visible ? <p>{goodness}kcal na {grammage}g</p> : null}
   </div>
   {visible ?
  <>
    <div className={styles.totalsWrapper}>
    <input className={styles.totalGrammage} type='number' pattern="[0-9]*" value={totalGrammage} onChange={(e)=> setTotalGrammage(re.test(e.target.value) ? e.target.value : '')}/><span className={styles.gram}>gram</span>
    <p className={styles.totals}>{`${totalGoodness}kcal W:${totalCarbohydrates}g B:${totalProtein}g T:${totalFat}g` }</p>
    </div> 
    <button type="submit" className={styles.button} onClick={() =>
    addEatenMeal(name, mealTime, mealDate, totalGrammage,totalGoodness,totalProtein,totalCarbohydrates,)}><FontAwesomeIcon icon={faPlusCircle}/></button>
     </>
   
    : null}
     </div>
  )
  
  }

FindMeal.propTypes = {
  name: PropTypes.string,
  
  goodness: PropTypes.number,
 
};

FindMeal.defaultProps = {
  name: 'produkt nieznany',
  
  goodness: 0,
  
};

const mapDispatchToProps = (dispatch) => ({
  addEatenMeal: (mealName,
mealTime,
  mealDate,
  totalGrammage,
  totalGoodness,
  totalProtein,
  totalCarbohydrates,
  totalFat) => dispatch(addEatenMeal(mealName,
mealTime,
  mealDate,
  totalGrammage,
  totalGoodness,
  totalProtein,
  totalCarbohydrates,
  totalFat))
})

export default connect(null, mapDispatchToProps)(FindMeal);