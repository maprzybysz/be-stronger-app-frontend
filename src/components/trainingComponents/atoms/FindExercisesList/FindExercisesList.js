import React from 'react';
import PropTypes from 'prop-types'
import styles from 'components/trainingComponents/atoms/FindExercisesList/FindExercisesList.module.scss';
import FindExercise from 'components/trainingComponents/atoms/FindExercisesList/FindExercise/FindExercise';


const FindExercisesList = ({findExercises, closeModalFn})=> (
  <ul className={styles.wrapper}>
    {findExercises.map((item)=>
      <FindExercise name={item.name} imgUrl={item.imgUrl} closeModalFn={closeModalFn} key={item.id} />
    )}
  </ul>
)

FindExercisesList.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
  findExercises: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    exerciseCategory: PropTypes.string,
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    mediaUrl: PropTypes.string,
    name: PropTypes.string
  })).isRequired
}

export default FindExercisesList;
