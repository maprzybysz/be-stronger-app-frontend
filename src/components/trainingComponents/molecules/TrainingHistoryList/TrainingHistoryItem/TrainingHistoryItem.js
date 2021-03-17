import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from 'components/trainingComponents/molecules/TrainingHistoryList/TrainingHistoryItem/TrainingHistoryItem.module.scss';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTraining  } from 'actions/index';
import ExerciseHistoryList from 'components/trainingComponents/molecules/ExerciseHistoryList/ExerciseHistoryList';

const TrainingHistoryItem = ({training, deleteTraining })=>{

  return(
 <li className={styles.wrapper}>
   <button className={styles.button} type='button' onClick={()=>deleteTraining(training.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
   <h1 className={styles.name}>{training.trainingName}</h1>
   <h2 className={styles.time}>{training.endTime}</h2>
   <h3 className={styles.exercises}>Ćwiczenia</h3>
   <ul>
     {training.exercises.map((exercise)=><ExerciseHistoryList exercise={exercise}/>)}
   </ul>
 </li>

)}
TrainingHistoryItem.propTypes = {
  deleteTraining: PropTypes.func.isRequired,
  training: PropTypes.arrayOf().isRequired
}
const mapDispatchToProps = (dispatch) => ({
   deleteTraining: (id) => dispatch(deleteTraining(id))
})

export default connect(null, mapDispatchToProps)(TrainingHistoryItem);

