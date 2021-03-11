import React from 'react';
import {connect} from 'react-redux';
import styles from 'components/rootComponents/organisms/SendRecovery/SendRecovery.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { sendRecoveryToken } from 'actions/index';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Musisz podać login!'),
});

const SendRecovery = ({sendRecoveryToken})=>(
  <div className={styles.wrapper}>
    <Link to="/" className={styles.closePaneLink}>
      <FontAwesomeIcon icon={faTimes}/>
    </Link>
    <h1 className={styles.h1}>Zapomniałeś hasła?</h1>
    <p className={styles.description}>Wprowadź login podany przy rejestracji. Wyślemy Ci link umożliwiający zmianę hasła.</p>
    <Formik
      initialValues={{ username: '',}}
      validationSchema={LoginSchema}
      onSubmit={({username}) => {
        sendRecoveryToken(username);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.loginForm}>
          <Field type="text" placeholder="login" name="username" className={styles.input} />
          {errors.username && touched.username ? (
            <div className={styles.error}>{errors.username}</div>
          ) : null}
          <button type="submit" className={styles.loginButton}>
            Restartuj hasło
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  sendRecoveryToken: (username) => dispatch(sendRecoveryToken(username)),
});

export default connect(null, mapDispatchToProps)(SendRecovery);