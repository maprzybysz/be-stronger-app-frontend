import React from 'react';
import PropTypes from 'prop-types'
import styles from 'components/trainingComponents/molecules/ExerciseHistoryList/ExerciseHistoryList.module.scss';



const ExerciseHistoryList = ({exercise})=>{
  let series = '';
  exercise.series.forEach((item,index)=>{
    if(index===(exercise.series.length-1)){
      series += `${item.repeatNumber}x${item.weight}kg`
    }else{
      series += `${item.repeatNumber}x${item.weight}kg, `
    }
  })

  return(
   <li className={styles.exercise}>{exercise.exerciseName}: {series}</li>
  )}

ExerciseHistoryList.propTypes = {
  exercise: PropTypes.objectOf().isRequired
}

export default ExerciseHistoryList;

