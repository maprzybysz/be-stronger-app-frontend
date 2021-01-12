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
import AppContext from 'context';
import LoginModal from 'components/organisms/LoginModal/LoginModal';

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

  handleLogin = (e, test) => {
    e.preventDefault();
    console.log(test);
  };

  render() {
    const { isModalLoginOpen } = this.state;
    const contextElements = {
      ...this.state,
      handleOpenLoginModal: this.handleOpenLoginModal,
      handleCloseLoginModal: this.handleCloseLoginModal,
      handleLogin: this.handleLogin,
    };
    return (
      <Div100vh className={styles.wrapper}>
        <GlobalStyle />
        <BrowserRouter>
          <AppContext.Provider value={contextElements}>
            <Header />
            {isModalLoginOpen ? <LoginModal /> : null}
            <Switch>
              <Route exact path="/" component={NavPane} />
              <Route exac path="/blog" component={Blog} />
              <Route exac path="/nutrition" component={Nutrition} />
              <Route exac path="/training" component={Training} />
            </Switch>
            <Footer />
          </AppContext.Provider>
        </BrowserRouter>
      </Div100vh>
    );
  }
}

export default Root;
