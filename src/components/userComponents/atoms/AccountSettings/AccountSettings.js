import React, {useState} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import styles from 'components/userComponents/atoms/AccountSettings/AccountSettings.module.scss';
import { addWeight, getUserWeights, getUserDetails } from 'actions/index';
import DeleteAccount from 'components/userComponents/atoms/DeleteAccount/DeleteAccount';
import Logout from 'components/userComponents/atoms/Logout/Logout';

const AccountSettings = () => {
  const[visible, setVisible] = useState(false);
  return(
    <>
    <div className={styles.wrapper} onClick={()=>setVisible(!visible)}>
      Twoje konto
      <FontAwesomeIcon icon={!visible ? faAngleDown : faAngleLeft} className={styles.arrow}/>
    </div>
    {visible ? <>
      <DeleteAccount/>
      <Logout/>
    </> : null}
    </>
    )
};


const mapDispatchToProps = (dispatch) => ({
  addWeight: (weight, date) => dispatch(addWeight(weight, date)),
  getUserWeights: ()=> dispatch(getUserWeights()),
  getUserDetails: ()=> dispatch(getUserDetails()),
});

const mapStateToProps = ({ userWeights}) => ({
  userWeights
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);


