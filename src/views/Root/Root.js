import React  from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {getUsername} from 'service/cookieService'
import store from 'store';
import Blog from 'views/Blog/Blog';
import Training from 'views/Training/Training';
import styles from 'views/Root/Root.module.scss';

import Header from 'components/molecules/Header/Header';
import Footer from 'components/atoms/Footer/Footer';
import NavPane from 'components/organisms/NavPane/NavPane';
import NutritionTopNav from 'components/molecules/NutritionTopNav/NutritionTopNav';
import Div100vh from 'react-div-100vh';
import RecipesTemplate from 'components/templates/RecipesTemplate/RecipesTemplate';
import LoginPane from 'components/organisms/LoginPane/LoginPane';
import MealTemplate from 'components/templates/MealTemplate/MealTemplate';
import RegistrationPane from 'components/organisms/RegistrationPane/RegistrationPane';
import history from 'history/history'
import MealAddModal from 'components/organisms/MealAddPane/MealAddPane';



const Root = () => (
  <Provider store={store}>
    <Div100vh className={styles.wrapper}>
      <GlobalStyle />
      <Router history = {history} >
        <Header />
        <Route path="/nutrition/" component={NutritionTopNav} />
        <Switch>
          <Route path="/login" component={LoginPane} />
          <Route path="/sign-up" component={RegistrationPane} />
          <Route
            path="/blog"
            render={() => getUsername()==null  ? <Redirect to="/login" /> : <Blog />}
          />
             <Route
            exact
            path="/"
            render={() =>
             getUsername()==null  ? <Redirect to="/login" /> : <NavPane />
            }
          />
          <Route
            exact
            path="/nutrition"
            render={() =>
             getUsername()==null ? <Redirect to="/login" /> : <MealTemplate />
            }
          />
           <Route
            path="/nutrition/addMeal/:mealtime"
            render={(props) =>
             getUsername()==null  ? <Redirect to="/login" /> : <MealAddModal {...props}/>
            }
          />
          <Route
            path="/nutrition/recipes"
            render={() =>
             getUsername()==null  ? <Redirect to="/login" /> : <RecipesTemplate />
            }
          />
          <Route
            path="/training"
            render={() =>
             getUsername()==null  ? <Redirect to="/login" /> : <Training />
            }
          />
        </Switch>
        <Footer />
      </Router>
    </Div100vh>
  </Provider>
);
          

export default Root;
