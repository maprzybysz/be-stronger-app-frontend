import React from 'react';
import PropTypes from 'prop-types'
import Exercise from 'components/trainingComponents/molecules/ExerciseList/Exercise/Exercise';


const ExerciseList = ({exercises})=>{
  return(
  <div>
    {exercises.map((item, index)=>(<Exercise name={item.exerciseName} series={item.series} id={index} key={item.tempKey} />))}
  </div>
)}

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      exerciseName: PropTypes.string,
      series: PropTypes.arrayOf(PropTypes.shape({
        weight: PropTypes.number,
        repeatNumber: PropTypes.number,
        key: PropTypes.string
      }))
    })
  ).isRequired,
}

export default ExerciseList;
