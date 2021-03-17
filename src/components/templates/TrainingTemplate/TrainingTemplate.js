import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from 'components/templates/TrainingTemplate/TrainingTemplate.module.scss';
import WorkoutModal from 'components/trainingComponents/organisms/WorkoutModal/WorkoutModal';

const TrainingTemplate = ({exercises}) => {


  const [modalVisible, setModalVisible] = useState(exercises.length>0)

  function closeModalFn(){
    setModalVisible(false);
  }
  return(
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Trening</h1>
      {modalVisible ?
        (<WorkoutModal closeModal={closeModalFn}/>) :
        (<button type='button' onClick={()=>setModalVisible(true)} className={styles.button}>Rozpocznij nowy trening</button>) }
    </div>
  );
};


TrainingTemplate.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      exerciseName: PropTypes.string,
      series: PropTypes.arrayOf(PropTypes.shape({
        weight: PropTypes.number,
        repeatNumber: PropTypes.number,
        key: PropTypes.string
      }))
    })
  ).isRequired
}

const mapStateToProps = ({exercises}) => ({exercises});

export default connect(mapStateToProps, null)(TrainingTemplate);
