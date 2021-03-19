import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from 'components/rootComponents/organisms/SendRecovery/SendRecovery.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { sendRecoveryToken } from 'actions/index';
import {translateMessageError} from 'assets/globalError';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';


const schema = Yup.object().shape({
  username: Yup.string().required('Musisz podać login!'),
});


const SendRecovery = ({sendRecoveryToken, recoveryMessage,errorRecovery})=>{
  const override = css`
    border-color: black;
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;
  const [isLoading, setIsLoading] = useState(false);
  return(
  <div className={styles.wrapper}>
    <Link to="/" className={styles.closePaneLink}>
      <FontAwesomeIcon icon={faTimes}/>
    </Link>
    <h1 className={styles.h1}>Zapomniałeś hasła?</h1>
    <Formik
      initialValues={{ username: '',}}
      validationSchema={schema}
      onSubmit={({username}) => {
        sendRecoveryToken(username);
        setIsLoading(true);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          {recoveryMessage!==null ? <p className={styles.message}>{recoveryMessage}</p>: <>
            <p className={styles.description}>Wprowadź login podany przy rejestracji. Wyślemy Ci link umożliwiający zmianę hasła.</p>
          <Field type="text" placeholder="login" name="username" className={styles.input} />
          {errors.username && touched.username ? (
            <div className={styles.error}>{errors.username}</div>
          ) : null}
          <button type="submit" className={styles.button} disabled={isLoading && errorRecovery===null}>
            Restartuj hasło{isLoading && errorRecovery===null ? <ClipLoader css={override}/> : null}
          </button>
          {errorRecovery ? <p className={styles.error}>{translateMessageError(errorRecovery)}</p> : null}
          </>}
        </Form>
      )}
    </Formik>
  </div>
)}

SendRecovery.propTypes = {
  errorRecovery: PropTypes.string,
  recoveryMessage: PropTypes.string,
  sendRecoveryToken: PropTypes.func.isRequired
}
SendRecovery.defaultProps = {
  errorRecovery: null,
  recoveryMessage: null
}

const mapDispatchToProps = (dispatch) => ({
  sendRecoveryToken: (username) => dispatch(sendRecoveryToken(username)),
});

const mapStateToProps = ({recoveryMessage, errorRecovery}) => ({recoveryMessage, errorRecovery})

export default connect(mapStateToProps, mapDispatchToProps)(SendRecovery);
