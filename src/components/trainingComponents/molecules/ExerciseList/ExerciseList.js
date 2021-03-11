import React from 'react';
import Exercise from 'components/trainingComponents/molecules/ExerciseList/Exercise/Exercise';


const ExerciseList = ({exercises})=>(
  <div>
    {exercises.map((item, index)=>(<Exercise name={item.exerciseName} series={item.series} id={index}/>))}
  </div>
)

export default ExerciseList;