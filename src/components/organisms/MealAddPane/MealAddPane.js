import React from 'react';


class MealAddModal extends React.Component {

    state = {
      mealName: '',
      mealTime: '',
      mealDate: '',
      totalGrammage: 0,
      totalGoodness: 0,
      totalProtein: 0,
      totalCarbohydrates: 0,
      totalFat: 0
      
        
    }

    componentDidMount(){
        this.setState(
            {
                mealTime: this.props.match.params.mealtime
            }
        )
        
    }

    render() {

        
        return (
             <div><h1>{this.state.mealTime}</h1></div>
        );
    }
}



export default MealAddModal; 