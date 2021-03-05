import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/userComponents/atoms/UserHeight/UserHeight.module.scss';
import { updateUserHeight} from 'actions/index';


const UserHeight = ({userHeight, updateUserHeight}) => {

  const [visible, setVisible] = useState(true);
  const [height, setHeight] = useState(userHeight);

  useEffect(() => {
    setHeight(userHeight);
  }, [userHeight])

  const handleChange = () => {
    if(userHeight!==height){
      updateUserHeight(height);
    }
    setVisible(true);
   }

  return(
    <div className={styles.wrapper} onClick={visible ? ()=>setVisible(!visible) : null} >
      <p className={styles.activity} >Wzrost: {visible ?
        (
          <p className={styles.activity}>{height}</p>
        ):
        (
          <p className={styles.activity}>
            <input type='number' className={styles.input} value={height} onChange={(e)=>setHeight(e.target.value)}/>
            <p onClick={handleChange} className={styles.add}>zmiana</p>
          </p>
          )
      }
      </p>
      <FontAwesomeIcon icon={visible ? faAngleDown : faAngleLeft} className={styles.arrow}/>
    </div>
  )
}

UserHeight.propTypes = {
  userHeight: PropTypes.number.isRequired,
  updateUserHeight: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  updateUserHeight: (height)=> dispatch(updateUserHeight(height))
});



export default connect(null, mapDispatchToProps)(UserHeight);
