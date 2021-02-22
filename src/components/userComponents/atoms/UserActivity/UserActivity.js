import React from 'react';
import styles from 'components/userComponents/atoms/UserActivity/UserActivity.module.scss';

const UserActivity = ({userActivity})=> (
  <div className={styles.wrapper}>Twoja obecna aktywność: {userActivity}</div>
)

export default UserActivity;