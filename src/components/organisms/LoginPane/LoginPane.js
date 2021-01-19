import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import styles from 'components/organisms/LoginPane/LoginPane.module.scss';
import { connect } from 'react-redux';
import { authenticate } from 'actions';

const LoginPane = ({ authenticate }) => (
  <div className={styles.wrapper}>
    <Link to="/" className={styles.closePaneLink}>
      X
    </Link>

    <h1 className={styles.loginTitle}>Logowanie</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {() => (
        <Form className={styles.loginForm}>
          <Field type="text" placeholder="login" name="username" className={styles.input} />
          <Field type="password" placeholder="hasło" name="password" className={styles.input} />
          <button type="submit" className={styles.loginButton}>
            Zaloguj
          </button>
          <Link to="/passwordreset">Nie pamiętasz hasła?</Link>
          <Link to="/sign-up">Rejestracja</Link>
        </Form>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(null, mapDispatchToProps)(LoginPane);
