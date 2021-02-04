import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEatenMeal} from 'actions';
import styles from 'components/atoms/FindMealList/FindMeal/FindMeal.module.scss';

const FindMeal = ({ name,  goodness, carbohydrates, protein, fat, addEatenMeal, mealDate, mealTime}) => {
 
  const [visible, setVisible] = useState(false);
const [grammage, setGrammage] = useState(100);
const totalGoodness = Math.floor(goodness*(grammage/100));
const totalCarbohydrates = Math.floor(carbohydrates*(grammage/100));
const totalProtein = Math.floor(protein*(grammage/100))
const totalFat = Math.floor(fat*(grammage/100))

const re = /^[0-9._\b]+$/;
  return (
  <div className={styles.wrapper}>
    <div className={styles.meal} onClick={()=>setVisible(!visible)}>
      <h1 className={styles.name}>{name} </h1>
   </div>
   {visible ?
    <div>
    <input type='number' pattern="[0-9]*" value={grammage} onChange={(e)=> setGrammage(re.test(e.target.value) ? e.target.value : '')}/> 
    <p>{`${totalGoodness} ${totalCarbohydrates} ${totalProtein} ${totalFat}` }</p>
    <button type="submit" onClick={() =>
    addEatenMeal(name, mealTime, mealDate, grammage,totalGoodness,totalProtein,totalCarbohydrates,)}>+</button> 
    </div> 
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