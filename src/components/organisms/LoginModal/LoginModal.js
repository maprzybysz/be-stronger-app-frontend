import React from 'react';
import AppContext from 'context';
import { Link } from 'react-router-dom';
import styles from 'components/organisms/LoginModal/LoginModal.module.scss';

const LoginModal = () => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.closeModalButton}
          onClick={context.handleCloseLoginModal}
        >
          X
        </button>
        <h1 className={styles.loginTitle}>Logowanie</h1>
        <form className={styles.loginForm}>
          <input type="text" placeholder="login" className={styles.input} />
          <input type="password" placeholder="hasło" className={styles.input} />
          <Link to="/passwordreset">Nie pamiętasz hasła?</Link>
          <button
            type="button"
            className={styles.loginButton}
            onClick={(e) => context.handleLogin(e, e.target.type)}
          >
            Zaloguj
          </button>
        </form>
      </div>
    )}
  </AppContext.Consumer>
);

export default LoginModal;
