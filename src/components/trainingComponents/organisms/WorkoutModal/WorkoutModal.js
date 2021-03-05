import React, {useState, useEffect} from 'react';
import styles from 'components/trainingComponents/organisms/WorkoutModal/WorkoutModal.module.scss';
import SearchTrainingModal from 'components/trainingComponents/organisms/SearchTrainingModal/SearchTrainingModal';

const WorkoutModal = ({closeModal})=> {

  const [trainingName, setTrainingName] = useState('Trening');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  useEffect(()=>{
    const time = new Date();
    if (time.getHours()>=5 && time.getHours()<=11){
      setTrainingName('Poranny trening')
    }else if(time.getHours()>=12 && time.getHours()<=18){
      setTrainingName('Popołudniowy trening')
    }else{
      setTrainingName('Wieczorny trening')
    }
  })
  return(
    <div className={styles.wrapper}>
      <button type='button' className={styles.cancelButton} onClick={closeModal}>Anuluj</button>
      <h1 className={styles.trainingName}>{trainingName}</h1>
      <button type='button' className={styles.addButton} onClick={()=>setSearchModalVisible(true)}>Dodaj ćwiczenie</button>
      {searchModalVisible ? <SearchTrainingModal closeModalFn={()=>setSearchModalVisible(false)}/> : null}
      <button type='button' className={styles.finishButton} onClick={()=>console.log('finish')}>Zakończ trening</button>
    </div>
  )
}

export default WorkoutModal;