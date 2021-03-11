import React from 'react';
import {connect} from 'react-redux';
import Series from 'components/trainingComponents/atoms/SeriesList/Series/Series';
import { addSeries } from 'actions/index';
import styles from 'components/trainingComponents/atoms/SeriesList/SeriesList.module.scss';

const SeriesList = ({series, exerciseId, addSeries})=>(
  <ul>
    {series.map((item, index)=>(<Series seriesId={index} exerciseId={exerciseId}/>))}
    <button className={styles.button} type='button' onClick={()=>addSeries(exerciseId)}>Dodaj serie</button>
  </ul>
)

const mapDispatchToProps = (dispatch) => ({
  addSeries: (id) => dispatch(addSeries(id)),
})

export default connect(null, mapDispatchToProps)(SeriesList);