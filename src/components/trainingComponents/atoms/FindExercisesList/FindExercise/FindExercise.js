import React from 'react';
import {connect} from 'react-redux';
import styles from 'components/trainingComponents/atoms/FindExercisesList/FindExercise/FindExercise.module.scss';
import noImage from 'assets/img/noImage.png';
import { chooseExercise} from 'actions/index';



const FindExercise = ({id, name, mediaUrl, chooseExercise, closeModalFn})=> {

  function helpFn(name){
    chooseExercise(name);
    closeModalFn();
  }

  return(
  <li className={styles.wrapper} onClick={()=>helpFn(name)} key={id}>
    <img src={mediaUrl==null ? noImage : mediaUrl} alt='exerciseIMG' className={styles.img}/>
    <h1 className={styles.name}>{name}</h1>
  </li>
)
}

const mapDispatchToProps = (dispatch) => ({
  chooseExercise: (exerciseName) => dispatch(chooseExercise(exerciseName)),
})

export default connect(null, mapDispatchToProps)(FindExercise);