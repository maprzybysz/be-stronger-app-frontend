import React from 'react';
import { connect } from 'react-redux';
import { previousDay, nextDay } from 'actions';
import { monthName, dayName } from 'assets/dateName';
import Day from 'components/atoms/Day/Day';
import styles from 'components/molecules/DateBar/DateBar.module.scss';

function DateBar({ previousDay, nextDay, date }) {
  const previousDate = new Date(new Date(date).setDate(date.getDate() - 1));
  const nextDate = new Date(new Date(date).setDate(date.getDate() + 1));

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={previousDay} className={styles.arrow}>
        {'<'}
      </button>

      <Day
        dayMonth={previousDate.getDate()}
        month={monthName[previousDate.getMonth()]}
        day={dayName[previousDate.getDay()]}
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
      />
      <button type="button" onClick={nextDay} className={styles.arrow}>
        {'>'}
      </button>
    </div>
  );
}

const mapStateToProps = ({ date }) => ({
  date,
});

const mapDispatchToProps = (dispatch) => ({
  previousDay: () => dispatch(previousDay()),
  nextDay: () => dispatch(nextDay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateBar);
