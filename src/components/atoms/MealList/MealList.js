import React from 'react';
import Meal from 'components/atoms/Meal/Meal';
import styles from 'components/atoms/MealList/MealList.module.scss';

const MealList = ({ products }) => (
  <>
    {console.log(products)}
    {products.length !== 0 ? (
      <ul className={styles.wrapper}>
        {products.map((item) => (
          <Meal
            key={item.id}
            name={item.mealName}
            grammage={item.totalGrammage}
            goodness={item.totalGoodness}
            protein={item.totalProtein}
            carbohydrates={item.totalCarbohydrates}
            fat={item.totalFat}
          />
        ))}
      </ul>
    ) : (
      <h1 className={styles.noItems}>nie znaleziono produktów - musisz coś dodać :)</h1>
    )}
  </>
);
export default MealList;
