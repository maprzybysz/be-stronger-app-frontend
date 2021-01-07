import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from 'views/Blog/Blog';
import Nutrition from 'views/Nutrition/Nutrition';
import Training from 'views/Training/Training';
import styles from 'views/Root/Root.module.scss';
import Header from 'components/molecules/Header/Header';
import Footer from 'components/atoms/Footer/Footer';
import NavPane from 'components/organisms/NavPane/NavPane';
import Div100vh from 'react-div-100vh';

class Root extends React.Component {
  state = {
    isModalLoginOpen: false,
  };

  handleOpenLoginModal = () => {
    this.setState({ isModalLoginOpen: true });
  };

  handleCloseLoginModal = () => {
    this.setState({ isModalLoginOpen: false });
  };

  render() {
    return (
      <Div100vh className={styles.wrapper}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <NavPane />
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/nutrition" component={Nutrition} />
            <Route path="/training" component={Training} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Div100vh>
    );
  }
}

export default Root;
