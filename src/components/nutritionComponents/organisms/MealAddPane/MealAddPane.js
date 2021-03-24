import React, {useState, useEffect} from 'react';
import styles from 'components/nutritionComponents/organisms/MealAddPane/MealAddPane.module.scss';
import {connect} from 'react-redux'
import {searchMeals, getTopMeals} from 'actions'
import { dateToString } from 'assets/dateName';
import PropTypes from 'prop-types';
import FindMealList from 'components/nutritionComponents/atoms/FindMealList/FindMealList';
import CreateMealButton from 'components/nutritionComponents/atoms/CreateMealButton/CreateMealButton';
import CreateMealModal from 'components/nutritionComponents/organisms/CreateMealModal/CreateMealModal';

const MealAddPane = ({date, match, findMeals, searchMeals, getTopMeals}) => {

  const [mealName, setMealName] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [createModalVisible, setCreateModalVisible] = useState(false);

  useEffect(() => {
    setMealTime(match.params.mealtime.toUpperCase());
    setMealDate(dateToString(date));
    if(findMeals.length===0){
      getTopMeals();
    }else if(mealName.length>=3){
      searchMeals(mealName);
    }
  }, [mealName])


  return (
    <>
      <div className={styles.wrapper}>
          <div className={styles.searchWrapper}>
            <h1 className={styles.title}>{mealTime}</h1>
            <input type='text' value={mealName} onChange={(e) => setMealName(e.target.value)}
                   placeholder='Wpisz nazwę...' className={styles.input} />
          </div>
          <div className={styles.listWrapper}><FindMealList meals={findMeals} mealTime={mealTime} mealDate={mealDate} />
          </div>
          <CreateMealButton openModalFn={() => setCreateModalVisible(true)} />
        {createModalVisible ? <CreateMealModal closeModalFn={()=>setCreateModalVisible(false)}/> : null }
      </div>

    </>
  );
}

MealAddPane.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    match: PropTypes.shape({params: PropTypes.shape({mealtime: PropTypes.string})}).isRequired,
    searchMeals: PropTypes.func.isRequired,
    findMeals: PropTypes.arrayOf(
    PropTypes.shape({


    }),
  ).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
searchMeals: (mealName) => dispatch(searchMeals(mealName)),
  getTopMeals: () => dispatch(getTopMeals()),
})
const mapStateToProps = ({date, findMeals }) => ({
   date, findMeals
})



export default connect(mapStateToProps, mapDispatchToProps)(MealAddPane);