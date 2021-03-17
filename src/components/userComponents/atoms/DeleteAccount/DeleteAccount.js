import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from 'components/userComponents/atoms/DeleteAccount/DeleteAccount.module.scss';
import { sendDeleteToken} from 'actions/index';


const DeleteAccount = ({sendDeleteToken, deleteMessage})=> {

  return(
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper}>
        Usuń konto
        <button type='button' className={styles.button} onClick={()=>sendDeleteToken()}>Usuń</button>
      </div>
      {deleteMessage ? <p className={styles.message}>{deleteMessage}</p> : null}
    </div>
  )
}

DeleteAccount.propTypes = {
  deleteMessage: PropTypes.string,
  sendDeleteToken: PropTypes.func.isRequired
}
DeleteAccount.defaultProps ={
  deleteMessage: null
}

const mapDispatchToProps = (dispatch) => ({
  sendDeleteToken: ()=> dispatch(sendDeleteToken())
});
const mapStateToProps = ({deleteMessage}) => ({deleteMessage})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);

