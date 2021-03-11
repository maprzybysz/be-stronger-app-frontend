import React from 'react';
import styles from 'components/trainingComponents/atoms/FindExercisesList/FindExercisesList.module.scss';
import FindExercise from 'components/trainingComponents/atoms/FindExercisesList/FindExercise/FindExercise';


const FindExercisesList = ({findExercises, closeModalFn})=> (
  <ul className={styles.wrapper}>
    {findExercises.map((item)=>
      <FindExercise name={item.name} mediaUrl={item.mediaUrl} closeModalFn={closeModalFn} key={item.id}/>
    )}
  </ul>
)

export default FindExercisesList;