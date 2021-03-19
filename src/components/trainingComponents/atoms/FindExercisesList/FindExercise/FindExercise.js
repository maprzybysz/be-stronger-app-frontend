import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from 'components/trainingComponents/atoms/FindExercisesList/FindExercise/FindExercise.module.scss';
import noImage from 'assets/img/noImage.png';
import { chooseExercise} from 'actions/index';



const FindExercise = ({ name, imgUrl, chooseExercise, closeModalFn})=> {

  function helpFn(name){
    chooseExercise(name);
    closeModalFn();
  }
  return(
  <li className={styles.wrapper} onClick={()=>helpFn(name)}>
    <div className={styles.wrapperImg}>
      <img src={imgUrl==null ? noImage : imgUrl} alt='exerciseIMG' className={styles.img}/>
    </div>
    <h1 className={styles.name}>{name}</h1>
  </li>
)
}

FindExercise.propTypes = {
  chooseExercise: PropTypes.func.isRequired,
  closeModalFn: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired
}
FindExercise.defaultProps={
  imgUrl: ''
}

const mapDispatchToProps = (dispatch) => ({
  chooseExercise: (exerciseName) => dispatch(chooseExercise(exerciseName)),
})

export default connect(null, mapDispatchToProps)(FindExercise);
