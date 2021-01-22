import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from 'components/organisms/LoginPane/LoginPane.module.scss';
import { connect } from 'react-redux';
import { authenticate } from 'actions';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Musisz podać nazwę użytkownika!'),
  password: Yup.string().required('Musisz podać hasło!'),
});

const LoginPane = ({ authenticate }) => (
  <div className={styles.wrapper}>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.loginForm}>
          <h1 className={styles.loginTitle}>Logowanie</h1>
          <Link to="/" className={styles.closePaneLink}>
            X
          </Link>
          <Field type="text" placeholder="login" name="username" className={styles.input} />
          {errors.username && touched.username ? (
            <div className={styles.error}>{errors.username}</div>
          ) : null}
          <Field type="password" placeholder="hasło" name="password" className={styles.input} />
          {errors.password && touched.password ? (
            <div className={styles.error}>{errors.password}</div>
          ) : null}
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
