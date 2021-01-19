import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/molecules/MealTime/MealTime.module.scss';
import Product from 'components/atoms/Product/Product';

const MealTime = ({ name, calories, protein, carbohydrate, fat, onClick, visible, openFn }) => (
  <>
    <div className={styles.wrapperMeal}>
      <div className={styles.wrapperData} onClick={openFn}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.value}>{calories} kcal</h2>
        <h2 className={styles.value}>B: {protein}</h2>
        <h2 className={styles.value}>W: {carbohydrate}</h2>
        <h2 className={styles.value}>T: {fat}</h2>
      </div>
      <div className={styles.wrapperButton}>
        <button type="button" className={styles.button} onClick={onClick}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
    <div>
      {visible ? (
        <ul className={styles.mealsWrapper}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      ) : null}
    </div>
  </>
);

export default MealTime;
