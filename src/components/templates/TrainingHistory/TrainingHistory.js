import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import styles from 'components/templates/TrainingHistory/TrainingHistory.module.scss';
import TrainingHistoryList from 'components/trainingComponents/molecules/TrainingHistoryList/TrainingHistoryList';
import { getUserTrainings } from 'actions/index';
import { connect } from 'react-redux';


const TrainingHistory = ({getUserTrainings, trainingHistory}) => {

  useEffect(()=>{
    getUserTrainings();
  },[])
  return(
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ostatnie treningi</h1>
      <TrainingHistoryList trainings={trainingHistory}/>
    </div>
  );
};

TrainingHistory.propTypes = {
  getUserTrainings: PropTypes.func.isRequired,
  trainingHistory: PropTypes.arrayOf(PropTypes.shape({
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

const mapStateToProps = ({trainingHistory}) => ({
  trainingHistory
})

const mapDispatchToProps = (dispatch) => ({
  getUserTrainings: () => dispatch(getUserTrainings())
})

export default connect(mapStateToProps ,mapDispatchToProps)(TrainingHistory);
