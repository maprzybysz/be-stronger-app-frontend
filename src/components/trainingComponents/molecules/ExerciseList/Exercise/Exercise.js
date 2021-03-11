import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SeriesList from 'components/trainingComponents/atoms/SeriesList/SeriesList';
import styles from 'components/trainingComponents/molecules/ExerciseList/Exercise/Exercise.module.scss';
import { deleteExercise } from 'actions/index';

const Exercise = ({name, series, id, deleteExercise})=>(
  <li className={styles.wrapper}>
    <div className={styles.nameWrapper}>
      <h1 className={styles.name}>{id+1}. {name}</h1>
      <button type='button' className={styles.button} onClick={()=>deleteExercise(id)}><FontAwesomeIcon icon={faTimes}/></button>
    </div>
    <SeriesList series={series} exerciseId={id}/>

  </li>
)
const mapDispatchToProps = (dispatch) => ({
  deleteExercise: (exerciseId) => dispatch(deleteExercise(exerciseId)),
})
export default connect(null, mapDispatchToProps)(Exercise);