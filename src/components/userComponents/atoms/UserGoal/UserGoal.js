import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import styles from 'components/userComponents/atoms/UserGoal/UserGoal.module.scss';
import { updateUserGoal} from 'actions/index';

const UserGoal = ({userGoal, updateUserGoal})=> {

  const [visible, setVisible] = useState(true);
  const [goal, setGoal] = useState(userGoal);

  useEffect(() => {
    setGoal(userGoal);
  }, [userGoal])

  const handleChange = (event) => {
    if(event.target.value!==userGoal){
      updateUserGoal(event.target.value);
      setGoal(event.target.value);
    }

  }

  return(
    <div className={styles.wrapper} onClick={visible ? ()=>setVisible(!visible) : null}>
      <p className={styles.activity}>Cel: {visible ?
      (
        <p className={styles.activity}>{goal}</p>
      ):
      (
        <select value={goal} onChange={handleChange} className={styles.activity}>
          <option value="REDUKCJA" onClick={()=>setVisible(!visible)}>REDUKCJA</option>
          <option value="UTRZYMANIE" onClick={()=>setVisible(!visible)}>UTRZYMANIE</option>
          <option value="MASA" onClick={()=>setVisible(!visible)}>MASA</option>
        </select>
      )
    }
      </p>
      <FontAwesomeIcon icon={visible ? faAngleDown : faAngleLeft} className={styles.arrow}/>
    </div>
  )
}

UserGoal.propTypes = {
  userGoal: PropTypes.string.isRequired,
  updateUserGoal: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  updateUserGoal: (goal)=> dispatch(updateUserGoal(goal))
});

export default connect(null, mapDispatchToProps)(UserGoal);