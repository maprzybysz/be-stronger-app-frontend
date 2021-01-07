import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from 'views/Blog/Blog';
import Nutrition from 'views/Nutrition/Nutrition';
import Training from 'views/Training/Training';
import styles from 'views/Root/Root.module.scss';
import Header from 'components/molecules/Header/Header';

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
      <div className={styles.wrapper}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/nutrition" component={Nutrition} />
            <Route path="/training" component={Training} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Root;
