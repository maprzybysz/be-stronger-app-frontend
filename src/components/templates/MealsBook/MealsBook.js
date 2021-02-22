import React from 'react';
import {connect} from 'react-redux';
import {searchMeals} from 'actions';
import PropTypes from 'prop-types';
import MealBookList from 'components/nutritionComponents/atoms/MealBookList/MealBookList';
import styles from 'components/templates/MealsBook/MealsBook.module.scss';


class MealsBook extends React.Component {

    state = { 
        mealName: '',
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

        const {mealName} = this.state;
        const {findMeals} = this.props;
        return (
            <div className={styles.wrapper}>
            <div className={styles.searchWrapper}><h1 className={styles.title}>Baza posiłków</h1>
            <input value={mealName} onChange={this.handleChange} className={styles.input} placeholder='Wpisz nazwę produktu'/></div>
            <div className={styles.listWrapper}><MealBookList meals={findMeals}/></div>
        </div>
        );
    }

   
}

MealsBook.propTypes = {
    searchMeals: PropTypes.func.isRequired,
    findMeals: PropTypes.arrayOf(
    PropTypes.shape({
        
    
    }),
  ).isRequired,
}



const mapStateToProps = ({findMeals}) => ({
    findMeals
})

const mapDispatchToProps = (dispatch) => ({
searchMeals: (mealName) => dispatch(searchMeals(mealName)),
})

export default connect(mapStateToProps ,mapDispatchToProps )(MealsBook);
