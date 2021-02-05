import React from 'react';
import styles from 'components/organisms/MealAddPane/MealAddPane.module.scss';
import {connect} from 'react-redux'
import {searchMeals} from 'actions'
import { dateToString } from 'assets/dateName';
import FindMealList from 'components/atoms/FindMealList/FindMealList';

class MealAddModal extends React.Component {

    state = {
      mealName: '',
      mealTime: '',
      mealDate: '',
     }

    componentDidMount(){
        const {date} = this.props;
        this.setState(
            {
            mealTime: this.props.match.params.mealtime.slice(1, this.props.match.params.mealtime.length ).toUpperCase(),
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
             <h1 className={styles.title}>{mealTime}</h1>
            <input type='text' value={mealName} onChange={this.handleChange} placeholder='Wpisz nazwę...' className={styles.input}/>
             <FindMealList meals={findMeals} mealTime={mealTime} mealDate={mealDate}/>
             </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
searchMeals: (mealName) => dispatch(searchMeals(mealName)),
})
const mapStateToProps = ({date, findMeals }) => ({
   date, findMeals
})



export default connect(mapStateToProps, mapDispatchToProps)(MealAddModal); 