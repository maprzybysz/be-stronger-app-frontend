import React from 'react';
import {connect} from 'react-redux';
import ExerciseList from 'components/trainingComponents/molecules/ExerciseList/ExerciseList';
import styles from 'components/trainingComponents/organisms/Training/Training.module.scss';


const Training = ({exercises})=>{
  console.log(exercises.length);
  return(
    <div className={styles.wrapper}>
      {exercises.length<=0 ? <p className={styles.info}>Dodaj pierwsze ćwiczenie</p> : <ExerciseList exercises={exercises}/>}
    </div>

  )
}
const mapStateToProps = ({exercises}) => ({
  exercises
})

export default connect(mapStateToProps,null)(Training);