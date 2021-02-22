import React from 'react';
import styles from 'components/nutritionComponents/organisms/MealAddPane/MealAddPane.module.scss';
import {connect} from 'react-redux'
import {searchMeals} from 'actions'
import { dateToString } from 'assets/dateName';
import PropTypes from 'prop-types';
import FindMealList from 'components/nutritionComponents/atoms/FindMealList/FindMealList';

class MealAddModal extends React.Component {

    state = {
      mealName: '',
      mealTime: '',
      mealDate: '',
     }

    componentDidMount(){
        const {date, match} = this.props;
        this.setState(
            {
            mealTime: match.params.mealtime.slice(1, match.params.mealtime.length ).toUpperCase(),
            mealDate: dateToString(date)
        })
    }

     
    handleChange = (e) => {
        const {mealName} = this.state;
        const {searchMeals} = this.props;
        this.setState({mealName: e.target.value})
         if(mealName.length>=3){
            searchMeals(mealName);
          }
    }
        

    render() {
        const {mealTime, mealName, mealDate} = this.state;
        const {findMeals} = this.props;
        
        return (
             <div className={styles.wrapper}>
             <div className={styles.searchWrapper}>
            <h1 className={styles.title}>{mealTime}</h1>
            <input type='text' value={mealName} onChange={this.handleChange} placeholder='Wpisz nazwę...' className={styles.input}/>
             </div>
            
            <div className={styles.listWrapper}> <FindMealList meals={findMeals} mealTime={mealTime} mealDate={mealDate}/></div>
             </div>
            
        );
    }
}

MealAddModal.propTypes = {
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
})
const mapStateToProps = ({date, findMeals }) => ({
   date, findMeals
})



export default connect(mapStateToProps, mapDispatchToProps)(MealAddModal); 