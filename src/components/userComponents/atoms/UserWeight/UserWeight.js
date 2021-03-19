import React, {useState, useEffect, forwardRef} from 'react';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faWeight } from '@fortawesome/free-solid-svg-icons';
import pl from 'date-fns/locale/pl';
import "react-datepicker/dist/react-datepicker.css";
import styles from 'components/userComponents/atoms/UserWeight/UserWeight.module.scss';
import { addWeight, getUserWeights, getUserDetails } from 'actions/index';
import WeightChart from 'components/userComponents/atoms/WeightChart/WeightChart';




const UserWeight = ({addWeight, getUserWeights, userWeights, userWeight, getUserDetails}) => {

  useEffect(()=>{
    getUserWeights();
    }, [])

  const[visible, setVisible] = useState(false);
  const[date, setDate] = useState(new Date());
  const[weight, setWeight] = useState(userWeight);

  const ExampleCustomInput = forwardRef(
    // eslint-disable-next-line react/prop-types
    ({ value, onClick }, ref) => (
      // eslint-disable-next-line react/button-has-type
      <button onClick={onClick} ref={ref} className={styles.input}>
        {value}
      </button>
    ),
  );

  function helpFn(){
    addWeight(weight, date);
    getUserWeights();
    getUserDetails();
  }
  function onHandleInputChange(e){
    const regexp =/^[0-9\b]+$/;
    if(e.target.value === '' || regexp.test(e.target.value)){
      setWeight(Number(e.target.value));
    }
  }
  return(
    <>
    <div className={styles.wrapper} onClick={()=>setVisible(!visible)}>
      Obecna waga: {userWeight}kg
      <FontAwesomeIcon icon={!visible ? faAngleDown : faAngleLeft} className={styles.arrow}/>
    </div>
    {visible ? <div className={styles.addPane}>
      <div className={styles.weightChart}><WeightChart userWeights={userWeights}/></div>
      <div className={styles.addWeight}>
        <div className={styles.weightInput}>
          <DatePicker className={styles.input} selected={date} onChange={date => setDate(date)} locale={pl} maxDate={new Date()}
                      customInput={<ExampleCustomInput/>}/>
          <input className={styles.input} value={weight} placeholder='Nowa waga' onChange={e => onHandleInputChange(e)}/>
        </div>
        <button type='button' className={styles.button} onClick={()=>helpFn()}><FontAwesomeIcon icon={faWeight}/></button>

      </div>
    </div> : null}

    </>
    )

}

UserWeight.propTypes = {
  addWeight: PropTypes.func.isRequired,
  getUserWeights: PropTypes.func.isRequired,
  userWeights: PropTypes.arrayOf(
    PropTypes.shape({

    })
  ).isRequired,
  userWeight: PropTypes.number.isRequired,
  getUserDetails: PropTypes.func.isRequired,
}
const mapDispatchToProps = (dispatch) => ({
  addWeight: (weight, date) => dispatch(addWeight(weight, date)),
  getUserWeights: ()=> dispatch(getUserWeights()),
  getUserDetails: ()=> dispatch(getUserDetails()),
});

const mapStateToProps = ({ userWeights}) => ({
  userWeights
})

export default connect(mapStateToProps, mapDispatchToProps)(UserWeight);


