import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from 'components/rootComponents/organisms/RestartPassword/RestartPassword.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { restartPassword } from 'actions/index';
import { translateMessageError } from 'assets/globalError';


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required('Musisz podać hasło!')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Hasło musi zawierać min. 8 znaków, 1 dużą literę, 1 liczbę oraz 1 znak specjalny',
    ),
  confirmPassword: Yup.string()
    .required('Proszę potwierdź hasło!')
    .oneOf([Yup.ref('password'), null], 'Hasła nie pasują do siebie!')
});

const RestartPassword = ({restartPassword, match, restartPasswordMessage, errorRestartPassword})=>{

  const { token } = match.params;

  return(
  <div className={styles.wrapper}>
    <Link to="/" className={styles.closePaneLink}>
      <FontAwesomeIcon icon={faTimes}/>
    </Link>
    <h1 className={styles.h1}>Restartowanie hasła</h1>
    <Formik
      initialValues={{ password: '', confirmPassword: ''}}
      validationSchema={LoginSchema}
      onSubmit={({password, confirmPassword}) => {
        restartPassword(token, password, confirmPassword)
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.restartForm}>
          {restartPasswordMessage!==null ? <p className={styles.message}>{restartPasswordMessage}</p>: <>
          <p className={styles.description}>Wprowadź nowe hasło</p>
          <Field type="password" placeholder="hasło" name="password" className={styles.input} />
          {errors.password && touched.password ? (
            <div className={styles.error}>{errors.password}</div>
          ) : null}
          <Field
            type="password"
            placeholder="powtórz hasło"
            name="confirmPassword"
            className={styles.input}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div className={styles.error}>{errors.confirmPassword}</div>
          ) : null}
          <button type="submit" className={styles.button}>
            Restartuj hasło
          </button>
            {errorRestartPassword ? <p className={styles.error}>{translateMessageError(errorRestartPassword)}</p> : null}
        </>}
        </Form>
      )}
    </Formik>
  </div>
)};

const mapStateToProps = ({restartPasswordMessage, errorRestartPassword}) => ({restartPasswordMessage, errorRestartPassword})

const mapDispatchToProps = (dispatch) => ({
  restartPassword: (token, password, confirmPassword) => dispatch(restartPassword(token, password, confirmPassword)),
});

RestartPassword.propTypes = {
  errorRestartPassword: PropTypes.string,
  match: PropTypes.shape({params: PropTypes.shape({token: PropTypes.string})}).isRequired,
  restartPassword: PropTypes.func.isRequired,
  restartPasswordMessage: PropTypes.string
}
RestartPassword.defaultProps = {
  restartPasswordMessage: null,
  errorRestartPassword: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(RestartPassword);
