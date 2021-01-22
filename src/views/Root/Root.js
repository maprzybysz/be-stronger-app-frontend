import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
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

class Root extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Div100vh className={styles.wrapper}>
          <GlobalStyle />
          <BrowserRouter>
            false ? <Redirect to="login" />;
            <Header />
            <Route path="/nutrition/" component={NutritionTopNav} />
            <Switch>
              <Route exact path="/" component={NavPane} />
              <Route path="/login" component={LoginPane} />
              <Route path="/sign-up" component={RegistrationPane} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/nutrition" component={MealTemplate} />
              <Route path="/nutrition/recipes" component={RecipesTemplate} />
              <Route path="/training" component={Training} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </Div100vh>
      </Provider>
    );
  }
}

export default Root;
