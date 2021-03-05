import React from 'react';
import styles from 'components/trainingComponents/organisms/SearchTrainingModal/SearchTrainingModal.module.scss';

const SearchTrainingModal = ({closeModalFn}) =>{

  return(
    <div className={styles.wrapper}>
      <button type='button' className={styles.closeButton} onClick={closeModalFn}>X</button>
    </div>
  )
}

export default SearchTrainingModal;