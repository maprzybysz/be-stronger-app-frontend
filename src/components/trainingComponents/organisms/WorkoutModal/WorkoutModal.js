import React, {useState} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/trainingComponents/organisms/WorkoutModal/WorkoutModal.module.scss';
import SearchTrainingModal from 'components/trainingComponents/organisms/SearchTrainingModal/SearchTrainingModal';
import Training from 'components/trainingComponents/organisms/Training/Training';
import {  saveTraining } from 'actions/index';

const WorkoutModal = ({closeModal, saveTraining, exercises})=> {

  const [trainingName, setTrainingName] = useState('Nowy trening');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [editName, setEditName] = useState(false);
  const [error, setError] = useState(null);

  function finishFn(){
    if(exercises.length<=0){
      setError('Przed zapisaniem treningu, musisz dodać ćwiczenia.')
    }else{
      setError(null);
      saveTraining(trainingName, exercises)
      closeModal();
    }

  }
  function addFn(){
    setSearchModalVisible(true)
    setError(null);
  }
  return(
    <div className={styles.wrapper}>
      <button type='button' className={styles.cancelButton} onClick={closeModal}>Anuluj</button>
      {!editName? <h1 className={styles.trainingName}>{trainingName}<button className={styles.nameButton} type='button' onClick={()=>setEditName(true)}><FontAwesomeIcon icon={faPencilAlt}/></button></h1> :
        <>
          <input value={trainingName} onChange={e=>setTrainingName(e.target.value)} className={styles.trainingInputName}/>
          <button type='button' className={styles.nameButton} onClick={()=>setEditName(false)}><FontAwesomeIcon icon={faCheck}/></button>
        </>
      }
      <Training/>
      <button type='button' className={styles.addButton} onClick={()=>addFn()}>Dodaj ćwiczenie</button>
      {searchModalVisible ? <SearchTrainingModal closeModalFn={()=>setSearchModalVisible(false)}/> : null}
      <button type='button' className={styles.finishButton} onClick={()=>finishFn()}>Zakończ trening</button>
      {error==null ? null : <p className={styles.error}>{error}</p> }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  saveTraining: (trainingName,training) => dispatch(saveTraining(trainingName,training)),

})
const mapStateToProps = ({exercises}) => ({
  exercises
})

export default connect(mapStateToProps,  mapDispatchToProps)(WorkoutModal);