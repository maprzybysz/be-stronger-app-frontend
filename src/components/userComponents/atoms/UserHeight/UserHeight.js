import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/userComponents/atoms/UserHeight/UserHeight.module.scss';
import { updateUserHeight} from 'actions/index';


const UserHeight = ({userHeight, updateUserHeight}) => {

  const [visible, setVisible] = useState(true);
  const [height, setHeight] = useState(userHeight);

  const handleChange = () => {
    if(userHeight!==height && height>0){
      updateUserHeight(height);
    }
    setVisible(true);
   }

  function onHandleInputChange(e){
    const regexp =/^[0-9\b]+$/;
    if(e.target.value === '' || regexp.test(e.target.value)){
      setHeight(Number(e.target.value));
    }
  }

  return(
    <div className={styles.wrapper} onClick={visible ? ()=>setVisible(!visible) : null} >
      <div className={styles.height} >Wzrost: {visible ?
        (
          <div className={styles.height}>{height===undefined ? userHeight : height}cm</div>
        ):
        (
          <div className={styles.height}>
            <input className={styles.input} value={height} onChange={e => onHandleInputChange(e)}/>cm
            <p onClick={()=>handleChange()} className={styles.add}>zmiana</p>
          </div>
          )
      }
      </div>
      <FontAwesomeIcon icon={visible ? faAngleDown : faAngleLeft} className={styles.arrow} onClick={()=>setVisible(!visible)}/>
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
