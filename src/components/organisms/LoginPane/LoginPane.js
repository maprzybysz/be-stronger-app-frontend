import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import styles from 'components/organisms/LoginPane/LoginPane.module.scss';

const LoginPane = () => (
  <div className={styles.wrapper}>
    <Link to="/" className={styles.closePaneLink}>
      X
    </Link>

    <h1 className={styles.loginTitle}>Logowanie</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        axios
          .post('http://localhost:8080/login', {
            username,
            password,
          })
          .then((response) => console.log(response.data.token))
          .catch((err) => console.log(err));
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

export default LoginPane;
