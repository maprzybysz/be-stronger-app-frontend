import React from 'react';
import {connect} from 'react-redux';
import styles from 'components/templates/UserDetailsTemplate/UserDetailsTemplate.module.scss';
import UserWeight from 'components/userComponents/atoms/UserWeight/UserWeight';
import UserActivity from 'components/userComponents/atoms/UserActivity/UserActivity';
import { getUserDetails } from 'actions/index';



class UserDetailsTemplate extends React.Component {


  componentDidMount() {
    this.props.getUserDetails();

  }

  render() {
    const {userDetails} = this.props;
    return (
      <div className={styles.wrapper}>
        <UserWeight userWeight={userDetails.weight}/>
        <UserActivity userActivity={userDetails.activity}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserDetails: ()=> dispatch(getUserDetails()),
});

const mapStateToProps = ({ userDetails }) => ({
  userDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsTemplate);

