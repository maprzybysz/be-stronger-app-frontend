import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import ExerciseList from 'components/trainingComponents/molecules/ExerciseList/ExerciseList';
import styles from 'components/trainingComponents/organisms/Training/Training.module.scss';


const Training = ({exercises})=>{

  return(
    <div className={styles.wrapper}>
      {exercises.length<=0 ? <p className={styles.info}>Dodaj pierwsze ćwiczenie</p> : <ExerciseList exercises={exercises}/>}
    </div>

  )
}

Training.propTypes = {
  exercises: PropTypes.arrayOf().isRequired
}

const mapStateToProps = ({exercises}) => ({
  exercises
})

export default connect(mapStateToProps,null)(Training);

