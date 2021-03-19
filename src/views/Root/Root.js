import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {  Provider } from 'react-redux';
import {getUsername} from 'service/cookieService'
import store from 'store';
import BlogTemplate from 'components/templates/BlogTemplate/BlogTemplate';
import TrainingTemplate from 'components/templates/TrainingTemplate/TrainingTemplate';
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
import BlogTopNav from 'components/blogComponents/molecules/BlogTopNav/BlogTopNav';
import TrainingTopNav from 'components/trainingComponents/molecules/TrainingTopNav/TrainingTopNav';
import ArticlesList from 'components/blogComponents/atoms/ArticlesList/ArticlesList';
import Article from 'components/blogComponents/atoms/Article/Article';
import SendRecovery from 'components/rootComponents/organisms/SendRecovery/SendRecovery';
import RestartPassword from 'components/rootComponents/organisms/RestartPassword/RestartPassword';
import TrainingHistory from 'components/templates/TrainingHistory/TrainingHistory';




const Root = () => (
  <Router history = {history} >
  <Provider store={store}>
    <Div100vh className={styles.wrapper}>

      <Header />
        <Route path="/nutrition/" component={NutritionTopNav} />
        <Route path="/userdetails/" component={UserDetailsTopNav} />
        <Route path="/blog/" component={BlogTopNav} />
        <Route path="/training/" component={TrainingTopNav} />
        <Switch>
          <Route path="/login" component={LoginPane} />
          <Route path="/sign-up" component={RegistrationPane} />
          <Route path="/sendrecovery" component={SendRecovery} />
          <Route path="/recoverypassword/:token" render={(props => <RestartPassword {...props}/>)}/>
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
          exact path="/training"
            render={() =>
             getUsername()==null  ? <Redirect to="/login" /> : <TrainingTemplate />
            }
          />
          <Route
            path="/training/history"
            render={() =>
              getUsername()==null  ? <Redirect to="/login" /> : <TrainingHistory />
            }
          />
          <Route
           exact path="/blog"
            render={() => getUsername()==null  ? <Redirect to="/login" /> : <BlogTemplate />}
          />
          <Route
            exact path="/blog/:categories"
            render={(props) =>
              getUsername()==null  ? <Redirect to="/login" /> : <ArticlesList {...props}/>
            }
          />
          <Route
            path="/blog/article/:id"
            render={(props) =>
              getUsername()==null  ? <Redirect to="/login" /> : <Article {...props}/>
            }
          />

        </Switch>
        <Footer />

    </Div100vh>
  </Provider>
  </Router>
);

export default Root;
