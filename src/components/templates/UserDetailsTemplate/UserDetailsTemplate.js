import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from 'components/templates/UserDetailsTemplate/UserDetailsTemplate.module.scss';
import UserWeight from 'components/userComponents/atoms/UserWeight/UserWeight';
import UserActivity from 'components/userComponents/atoms/UserActivity/UserActivity';
import { getUserDetails } from 'actions/index';
import UserHeight from 'components/userComponents/atoms/UserHeight/UserHeight';
import UserGoal from 'components/userComponents/atoms/UserGoal/UserGoal';



class UserDetailsTemplate extends React.Component {


  componentDidMount() {
    const {getUserDetails} = this.props;
    getUserDetails();


  }

  render() {
    const {userDetails} = this.props;
    console.log(userDetails);
    return (
      <div className={styles.wrapper}>
        <UserWeight userWeight={userDetails.weight}/>
        <UserActivity userActivity={userDetails.activity}/>
        <UserHeight userHeight={userDetails.height}/>
        <UserGoal userGoal={userDetails.goal}/>
      </div>
    );
  }
}

UserDetailsTemplate.propTypes = {
  userDetails: PropTypes.arrayOf(
    PropTypes.shape({


    }),
  ).isRequired,
  getUserDetails: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  getUserDetails: ()=> dispatch(getUserDetails()),
});

const mapStateToProps = ({ userDetails }) => ({
  userDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsTemplate);

