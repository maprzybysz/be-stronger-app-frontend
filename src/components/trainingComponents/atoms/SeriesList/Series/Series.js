import React,{useState} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from 'components/trainingComponents/atoms/SeriesList/Series/Series.module.scss';
import { deleteSeries, updateSeries } from 'actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Series = ({seriesId, exerciseId, deleteSeries, updateSeries})=>{

  const[numberRepeat, setNumberRepeat] = useState(0);
  const[weight, setWeight] = useState(0);
  const[submitted, setSubmitted] = useState(false);

  function helpFnDelete(seriesId, exerciseId){
    setSubmitted(true);
    deleteSeries(seriesId, exerciseId);
  }
  function helpFnUpdate(seriesId, exerciseId, numberRepeat, weight){
    setSubmitted(true);
    updateSeries(exerciseId, seriesId, Number(numberRepeat), Number(weight))
  }
  function onHandleInputChange(e, setFn){
    const regexp =/^[0-9\b]+$/;
    if(e.target.value === '' || regexp.test(e.target.value)){
      setFn(Number(e.target.value));
    }
  }

  return(
    <li>
      {submitted ?
        <div className={styles.series}>
          <p className={styles.id}>{seriesId+1}.</p>
          <div className={styles.inputGroup}>{numberRepeat}x{weight}kg </div>
          <div className={styles.buttonGroup}>
            <button className={styles.buttonDelete} type='button' onClick={()=>helpFnDelete(seriesId, exerciseId)}><FontAwesomeIcon icon={faTimes}/></button>
          </div>
        </div>:
        <div className={styles.series}>
          <p className={styles.id}>{seriesId+1}.</p>
          <div className={styles.inputGroup}>
            <input  className={styles.input} value={numberRepeat} onChange={(e)=>onHandleInputChange(e, setNumberRepeat)} />x
            <input className={styles.input} value={weight} onChange={(e)=>onHandleInputChange(e, setWeight)}/>kg
          </div>
          <div className={styles.buttonGroup}>
            <button type='button' className={styles.buttonCheck} onClick={()=>helpFnUpdate(exerciseId, seriesId, numberRepeat, weight)}><FontAwesomeIcon icon={faCheck}/></button>
            <button type='button' className={styles.buttonDelete} onClick={()=>helpFnDelete(seriesId, exerciseId)}><FontAwesomeIcon icon={faTimes}/></button>
          </div>
        </div>}
    </li>


)}
Series.propTypes = {
  deleteSeries: PropTypes.func.isRequired,
  exerciseId: PropTypes.number.isRequired,
  seriesId: PropTypes.number.isRequired,
  updateSeries: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => ({
  deleteSeries: (exerciseId, seriesId) => dispatch(deleteSeries(exerciseId, seriesId)),
  updateSeries: (exerciseId, seriesId, numberRepeat, weight) => dispatch(updateSeries(exerciseId, seriesId, numberRepeat, weight)),
})

export default connect(null, mapDispatchToProps)(Series);
