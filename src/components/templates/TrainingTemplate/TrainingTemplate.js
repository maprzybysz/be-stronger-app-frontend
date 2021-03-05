import React, {useState} from 'react';
import styles from 'components/templates/TrainingTemplate/TrainingTemplate.module.scss';
import WorkoutModal from '../../trainingComponents/organisms/WorkoutModal/WorkoutModal';

const TrainingTemplate = () => {

  const [modalVisible, setModalVisible] = useState(false);

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




export default TrainingTemplate;
