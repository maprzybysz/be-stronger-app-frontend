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
      <p className={styles.activity} >Wzrost: {visible ?
        (
          <p className={styles.activity}>{height===undefined ? userHeight : height}</p>
        ):
        (
          <p className={styles.activity}>
            <input className={styles.input} value={height} onChange={e => onHandleInputChange(e)}/>
            <p onClick={()=>handleChange()} className={styles.add}>zmiana</p>
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

}

const mapDispatchToProps = (dispatch) => ({
  updateUserHeight: (height)=> dispatch(updateUserHeight(height))
});



export default connect(null, mapDispatchToProps)(UserHeight);
