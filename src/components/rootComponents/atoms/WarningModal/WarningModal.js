import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/rootComponents/atoms/WarningModal/WarningModal.module.scss';

const WarningModal = ({message, closeFn})=>(
  <div className={styles.wrapper}>
    <h1>{message}</h1>
    <button type='button' onClick={closeFn} className={styles.button}>X</button>
  </div>
)

WarningModal.propTypes = {
  message: PropTypes.string.isRequired,
  closeFn: PropTypes.func.isRequired
}


export default WarningModal