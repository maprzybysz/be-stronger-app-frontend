import React from 'react';
import PropTypes from 'prop-types'
import styles from 'components/trainingComponents/molecules/TrainingHistoryList/TrainingHistoryList.module.scss';
import TrainingHistoryItem from 'components/trainingComponents/molecules/TrainingHistoryList/TrainingHistoryItem/TrainingHistoryItem';

const TrainingHistoryList = ({trainings})=> (
  <ul className={styles.wrapper}>
    {trainings.reverse().map((training, index)=><TrainingHistoryItem training={training} index={index}/>)}
  </ul>
)

TrainingHistoryList.propTypes = {
  trainings: PropTypes.arrayOf().isRequired
}

export default TrainingHistoryList;
