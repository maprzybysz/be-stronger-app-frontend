import React  from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {getUsername} from 'service/cookieService'
import store from 'store';
import Blog from 'views/Blog/Blog';
import Training from 'views/Training/Training';
import styles from 'views/Root/Root.module.scss';
import ShoppingPane from 'components/templates/ShoppingTemplate/ShoppingTemplate';
import Header from 'components/rootComponents/atoms/Header/Header';
import Footer from 'components/rootComponents/atoms/Footer/Footer';
import NavPane from 'components/rootComponents/organisms/NavPane/NavPane';
import NutritionTopNav from 'components/nutritionComponents/molecules/NutritionTopNav/NutritionTopNav';
import Div100vh from 'react-div-100vh';
import MealsBook from 'components/templates/MealsBook/MealsBook';
import LoginPane from 'components/rootComponents/organisms/LoginPane/LoginPane';
import MealEatenTemplate from 'components/templates/MealEatenTemplate/MealEatenTemplate';
import RegistrationPane from 'components/rootComponents/organisms/RegistrationPane/RegistrationPane';
import history from 'history/history'
import MealAddModal from 'components/nutritionComponents/organisms/MealAddPane/MealAddPane';
import MealDetails from 'components/nutritionComponents/atoms/MealDetails/MealDetails';
import UserDetailsTemplate from 'components/templates/UserDetailsTemplate/UserDetailsTemplate';
import UserDetailsTopNav  from 'components/userComponents/molecules/UserDetailsTopNav/UserDetailsTopNav';


const Root = () => (
  <Provider store={store}>
    <Div100vh className={styles.wrapper}>
      <GlobalStyle />
      <Router history = {history} >
        <Header />
        <Route path="/nutrition/" component={NutritionTopNav} />
        <Route path="/userdetails/" component={UserDetailsTopNav} />
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
            path="/userdetails"
            render={() =>
              getUsername()==null ? <Redirect to="/login" /> : <UserDetailsTemplate />
            }
          />
          <Route
            exact
            path="/nutrition"
            render={() =>
             getUsername()==null ? <Redirect to="/login" /> : <MealEatenTemplate />
            }
          />
           <Route
            path="/nutrition/addMeal/:mealtime"
            render={(props) =>
             getUsername()==null  ? <Redirect to="/login" /> : <MealAddModal {...props}/>
            }
          />
          <Route
           exact path="/nutrition/mealsbook"
            render={() =>
             getUsername()==null  ? <Redirect to="/login" /> : <MealsBook/>
            }
          />
            <Route
            path="/nutrition/mealsbook/:mealname"
            render={(props) =>
             getUsername()==null  ? <Redirect to="/login" /> : <MealDetails {...props}/>
            }
          />
            <Route
            path="/nutrition/shoppinglist"
            render={() =>
             getUsername()==null  ? <Redirect to="/login" /> : <ShoppingPane />
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
