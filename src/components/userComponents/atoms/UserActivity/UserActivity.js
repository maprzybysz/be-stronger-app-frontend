import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from 'components/userComponents/atoms/UserActivity/UserActivity.module.scss';
import { updateUserActivity} from 'actions/index';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserActivity = ({userActivity, updateUserActivity})=> {

  const [visible, setVisible] = useState(true);
  const [activity, setActivity] = useState(userActivity);

  useEffect(() => {
    setActivity(userActivity);
  }, [userActivity])

  const handleChange = (event) => {
    if(event.target.value!==activity){
      updateUserActivity(event.target.value);
      setActivity(event.target.value);
    }
  }

  return(
    <div className={styles.wrapper} onClick={visible ? ()=>setVisible(!visible) : null}>
      <div className={styles.activity}>Aktywność: {visible ?
      (
        <div className={styles.activity}>{activity}</div>
      ):
      (
        <select value={activity} onChange={handleChange}  className={styles.activity}>
          <option value="ZNIKOMA" onClick={()=>setVisible(!visible)}>ZNIKOMA</option>
          <option value="MAŁA" onClick={()=>setVisible(!visible)}>MAŁA</option>
          <option value="UMIARKOWANA" onClick={()=>setVisible(!visible)}>UMIARKOWANA</option>
          <option value="DUŻA" onClick={()=>setVisible(!visible)}>DUŻA</option>
        </select>
    )
    }
      </div>
      <FontAwesomeIcon icon={visible ? faAngleDown : faAngleLeft} className={styles.arrow} onClick={()=>setVisible(!visible)}/>
    </div>
  )
}

UserActivity.propTypes = {
  userActivity: PropTypes.string.isRequired,
  updateUserActivity: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  updateUserActivity: (activity)=> dispatch(updateUserActivity(activity))
});

export default connect(null, mapDispatchToProps)(UserActivity);