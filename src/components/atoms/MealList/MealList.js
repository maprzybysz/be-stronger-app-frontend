import React from 'react';
import Meal from 'components/atoms/Meal/Meal';
import styles from 'components/atoms/MealList/MealList.module.scss';

const MealList = ({ products }) => (
  <>
    {products.length ? (
      <ul className={styles.wrapper}>
        {products.map((item, index) => (
          <Meal
            key={index}
            name={item.name}
            grammage={item.grammage}
            goodness={item.goodness}
            protein={item.protein}
            carbohydrates={item.carbohydrates}
            fat={item.fat}
          />
        ))}
      </ul>
    ) : (
      <h1 className={styles.noItems}>nie znaleziono produktów - musisz coś dodać :)</h1>
    )}
  </>
);
export default MealList;
