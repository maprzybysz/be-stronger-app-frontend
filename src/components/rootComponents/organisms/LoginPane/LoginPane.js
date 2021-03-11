import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from 'components/rootComponents/organisms/LoginPane/LoginPane.module.scss';
import { connect } from 'react-redux';
import { authenticate } from 'actions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { translateMessageError } from '../../../../assets/globalError';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Musisz podać nazwę użytkownika!'),
  password: Yup.string().required('Musisz podać hasło!'),
});

const LoginPane = ({ authenticate, errorLogin }) =>(
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
            <FontAwesomeIcon icon={faTimes}/>
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
          {errorLogin !==null ? <p className={styles.error}>{translateMessageError(errorLogin)}</p> : null}
          <Link to="/sendrecovery" className={styles.link}>Nie pamiętasz hasła?</Link>
          <Link to="/sign-up"className={styles.link}>Rejestracja</Link>
        </Form>
      )}
    </Formik>
  </div>
);

LoginPane.propTypes = {
  authenticate: PropTypes.func.isRequired,
  errorLogin: PropTypes.string,
};
LoginPane.defaultProps = {
  errorLogin: '',
};
const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
});
const mapStateToProps = ({ errorLogin }) => ({
  errorLogin
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPane);
