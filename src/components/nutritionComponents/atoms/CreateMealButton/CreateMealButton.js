import React from 'react';
import PropTypes from 'prop-types'
import styles from 'components/nutritionComponents/atoms/CreateMealButton/CreateMealButton.module.scss';

const CreateMealButton = ({openModalFn})=>(
  <button type='button' className={styles.wrapper} onClick={openModalFn}>Stwórz własny posiłek</button>
)

CreateMealButton.propTypes = {
  openModalFn: PropTypes.func.isRequired
}

export default CreateMealButton;
