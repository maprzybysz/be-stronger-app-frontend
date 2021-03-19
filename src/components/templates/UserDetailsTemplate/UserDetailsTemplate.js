import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from 'components/templates/UserDetailsTemplate/UserDetailsTemplate.module.scss';
import UserWeight from 'components/userComponents/atoms/UserWeight/UserWeight';
import UserActivity from 'components/userComponents/atoms/UserActivity/UserActivity';
import { getUserDetails } from 'actions/index';
import UserHeight from 'components/userComponents/atoms/UserHeight/UserHeight';
import UserGoal from 'components/userComponents/atoms/UserGoal/UserGoal';
import AccountSettings from 'components/userComponents/atoms/AccountSettings/AccountSettings';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';




const UserDetailsTemplate = ({ getUserDetails, userDetails}) =>{

  const override = css`
    border-color: white;
    width: 20px;
    height: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

    useEffect(()=>{
      getUserDetails();
      }, [])

  return (
      <>
        {userDetails===null ? <ClipLoader css={override}/> :
      <div className={styles.wrapper}>
        <UserWeight userWeight={userDetails.weight} />
        <UserActivity userActivity={userDetails.activity} />
        <UserHeight userHeight={userDetails.height} />
        <UserGoal userGoal={userDetails.goal} />
        <AccountSettings />
      </div>}
      </>
  );

}

UserDetailsTemplate.propTypes = {
  userDetails: PropTypes.shape({
    weight: PropTypes.number,
    activity: PropTypes.string,
    height: PropTypes.number,
    goal: PropTypes.string
  }),
  getUserDetails: PropTypes.func.isRequired
}

UserDetailsTemplate.defaultProps={
  userDetails: null
}
const mapDispatchToProps = (dispatch) => ({
  getUserDetails: ()=> dispatch(getUserDetails()),
});

const mapStateToProps = ({ userDetails }) => ({
  userDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsTemplate);

