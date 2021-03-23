import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/trainingComponents/organisms/WorkoutModal/WorkoutModal.module.scss';
import SearchTrainingModal from 'components/trainingComponents/organisms/SearchTrainingModal/SearchTrainingModal';
import Training from 'components/trainingComponents/organisms/Training/Training';
import { saveTraining, deleteUnsavedTraining } from 'actions/index';
import WarningModal from '../../../rootComponents/atoms/WarningModal/WarningModal';


const WorkoutModal = ({ closeModal, deleteUnsavedTraining, saveTraining, exercises }) => {

  const [trainingName, setTrainingName] = useState('Nowy trening');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [editName, setEditName] = useState(false);
  const [error, setError] = useState(null);

  function finishFn() {
    let emptyExercise = false;
    let emptySeries = false;
    if (exercises.length <= 0) {
      setError('Przed zapisaniem treningu, musisz dodać ćwiczenia');
    } else {
      exercises.forEach((item) => {
        // eslint-disable-next-line no-unused-expressions
        item.series.length === 0 ? emptyExercise = true : emptyExercise;
        item.series.forEach((exercise) => {

          // eslint-disable-next-line no-unused-expressions
          exercise.weight === -1 || exercise.repeatNumber === -1 ? emptySeries = true : emptySeries;
        });
      });
      if (emptyExercise) {
        setError('Ćwiczenia muszą mieć serie');
      } else if (emptySeries) {
        setError('Aby zakończyć musisz zatwierdzić wszystkie serie');
      } else {
        setError(null);
        saveTraining(trainingName, exercises);
        closeModal();
      }

    }
  }

  function addFn() {
    setSearchModalVisible(true);
    setError(null);
  }

  function cancelFn() {
    closeModal();
    deleteUnsavedTraining();
  }

  return (
    <div className={styles.wrapper}>
      <button type='button' className={styles.cancelButton} onClick={() => cancelFn()}>Anuluj</button>
      {!editName ? <h1 className={styles.trainingName}>{trainingName}
          <button className={styles.nameButton} type='button' onClick={() => setEditName(true)}><FontAwesomeIcon
            icon={faPencilAlt} /></button>
        </h1> :
        <>
          <input value={trainingName} onChange={e => setTrainingName(e.target.value)}
                 className={styles.trainingInputName} />
          <button type='button' className={styles.nameButton} onClick={() => setEditName(false)}><FontAwesomeIcon
            icon={faCheck} /></button>
        </>
      }
      <Training />

      <button type='button' className={styles.addButton} onClick={() => addFn()}>Dodaj ćwiczenie</button>
      {searchModalVisible ? <SearchTrainingModal closeModalFn={() => setSearchModalVisible(false)} /> : null}
      <button type='button' className={styles.finishButton} onClick={() => finishFn()}>Zakończ trening</button>
      {error == null ? null : <WarningModal closeFn={()=>setError(null)} message={error}/>}
    </div>

  );
};

WorkoutModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteUnsavedTraining: PropTypes.func.isRequired,
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
  saveTraining: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  saveTraining: (trainingName, training) => dispatch(saveTraining(trainingName, training)),
  deleteUnsavedTraining: () => dispatch(deleteUnsavedTraining()),

});
const mapStateToProps = ({ exercises }) => ({
  exercises,
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutModal);

