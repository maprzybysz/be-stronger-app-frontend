import React from 'react';
import PropTypes from 'prop-types'
import Exercise from 'components/trainingComponents/molecules/ExerciseList/Exercise/Exercise';


const ExerciseList = ({exercises})=>{

  return(
  <div>
    {exercises.map((item, index)=>(<Exercise name={item.exerciseName} series={item.series} id={index} />))}
  </div>
)}

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf().isRequired
}

export default ExerciseList;
