import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeight } from '@fortawesome/free-solid-svg-icons';
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



  function helpFn(){
    addWeight(weight, date);
    getUserWeights();
    getUserDetails();
  }
  return(
    <>
    <div className={styles.wrapper} onClick={()=>setVisible(!visible)}>
      Obecna waga: {userWeight}kg
    </div>
    {visible ? <div className={styles.addPane}>
      <div className={styles.weightChart}><WeightChart userWeights={userWeights}/></div>
      <div className={styles.addWeight}>
        <div className={styles.weightInput}>
          <DatePicker className={styles.input} selected={date} onChange={date => setDate(date)} locale={pl}/>
          <input className={styles.input} value={weight} placeholder='Nowa waga' onChange={e => setWeight(e.target.value)}/>
        </div>
        <button type='button' className={styles.button} onClick={()=>helpFn()}><FontAwesomeIcon icon={faWeight}/></button>
      </div>
    </div> : null}
    </>
    )

};

const mapDispatchToProps = (dispatch) => ({
  addWeight: (weight, date) => dispatch(addWeight(weight, date)),
  getUserWeights: ()=> dispatch(getUserWeights()),
  getUserDetails: ()=> dispatch(getUserDetails()),
});

const mapStateToProps = ({ userWeights}) => ({
  userWeights
})

export default connect(mapStateToProps, mapDispatchToProps)(UserWeight);


