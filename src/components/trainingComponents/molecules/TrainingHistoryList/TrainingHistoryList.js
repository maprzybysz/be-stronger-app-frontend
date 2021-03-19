import React from 'react';
import PropTypes from 'prop-types'
import styles from 'components/trainingComponents/molecules/TrainingHistoryList/TrainingHistoryList.module.scss';
import TrainingHistoryItem from 'components/trainingComponents/molecules/TrainingHistoryList/TrainingHistoryItem/TrainingHistoryItem';

const TrainingHistoryList = ({trainings})=> (
  <ul className={styles.wrapper}>
    {trainings.reverse().map((training, index)=><TrainingHistoryItem training={training} index={index} key={training.id}/>)}
  </ul>
)

TrainingHistoryList.propTypes = {
  trainings: PropTypes.arrayOf(PropTypes.shape({
    endTime: PropTypes.string,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        exerciseName: PropTypes.string,
        series: PropTypes.arrayOf(PropTypes.shape({
          weight: PropTypes.number,
          repeatNumber: PropTypes.number,
          key: PropTypes.string
        }))
      })),
    id: PropTypes.number,
    trainingName: PropTypes.string
  })).isRequired
}

export default TrainingHistoryList;
