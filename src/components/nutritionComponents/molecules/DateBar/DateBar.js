import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { previousDay, nextDay, updateMeals, getUserTMR } from 'actions';
import { monthName, dayName, dateToString } from 'assets/dateName';
import Day from 'components/nutritionComponents/atoms/Day/Day';
import styles from 'components/nutritionComponents/molecules/DateBar/DateBar.module.scss';

function DateBar({ previousDay, nextDay, date, updateMeals, getUserTMR}) {
  const previousDate = new Date(new Date(date).setDate(date.getDate() - 1));
  const nextDate = new Date(new Date(date).setDate(date.getDate() + 1));

 
  useEffect(() => {
    updateMeals(dateToString(date));
    getUserTMR(dateToString(date));
  });
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={previousDay} className={styles.arrow}>
        {'<'}
      </button> 
      <Day
        dayMonth={previousDate.getDate()}
        month={monthName[previousDate.getMonth()]}
        day={dayName[previousDate.getDay()]}
        onClick={previousDay}
      />
      <Day
        dayMonth={date.getDate()}
        month={monthName[date.getMonth()]}
        day={dayName[date.getDay()]}
      />
      <Day
        dayMonth={nextDate.getDate()}
        month={monthName[nextDate.getMonth()]}
        day={dayName[nextDate.getDay()]}
        onClick={nextDay}
      />

    
      <button type="button" onClick={nextDay} className={styles.arrow}>
        {'>'}
      </button>
    </div>
  );
}

DateBar.propTypes = {
  previousDay: PropTypes.func.isRequired,
  nextDay: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  updateMeals: PropTypes.func.isRequired,
  getUserTMR: PropTypes.func.isRequired,
  };
const mapStateToProps = ({ date }) => ({
  date,
 
});

const mapDispatchToProps = (dispatch) => ({
  previousDay: () => dispatch(previousDay()),
  nextDay: () => dispatch(nextDay()),
  updateMeals: (date) => dispatch(updateMeals( date )),
  getUserTMR: (date)=> dispatch(getUserTMR(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(DateBar);
