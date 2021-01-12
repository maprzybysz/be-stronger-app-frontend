import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from 'views/Nutrition/Nutrition.module.scss';
import MealTemplate from 'components/templates/MealTemplate/MealTemplate';
import RecipesTemplate from 'components/templates/RecipesTemplate/RecipesTemplate';
import NutritionTopNav from 'components/molecules/NutritionTopNav/NutritionTopNav';

class Nutrition extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <NutritionTopNav />
          <Switch>
            <Route exact path="/nutrition" component={MealTemplate} />
            <Route exact path="/nutrition/recipes" component={RecipesTemplate} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nutrition;
