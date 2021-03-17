import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { searchExercises, chooseExercise } from 'actions/index';
import styles from 'components/trainingComponents/organisms/SearchTrainingModal/SearchTrainingModal.module.scss';
import FindExercisesList from 'components/trainingComponents/atoms/FindExercisesList/FindExercisesList';

const SearchTrainingModal = ({closeModalFn, findExercises, searchExercises}) =>{

  const [exerciseName, setExerciseName] = useState('');


  useEffect(()=>{
    searchExercises(exerciseName);
    }, [exerciseName])


  return(
    <div className={styles.wrapper}>
      <button type='button' className={styles.closeButton} onClick={closeModalFn}>X</button>
      <div className={styles.inputWrapper}>
        <input placeholder='wyszukaj ćwiczenie...' className={styles.input} value={exerciseName} onChange={(e)=>setExerciseName(e.target.value)}/>
      </div>
      <div className={styles.listWrapper}>
        <FindExercisesList findExercises={findExercises} closeModalFn={closeModalFn}/>
      </div>

    </div>
  )
}

const mapStateToProps = ({findExercises}) => ({
  findExercises
})
SearchTrainingModal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
  findExercises: PropTypes.func.isRequired,
  searchExercises: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  searchExercises: (exerciseName) => dispatch(searchExercises(exerciseName)),
  chooseExercise: (exerciseName) => dispatch(chooseExercise(exerciseName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTrainingModal);

