import React from 'react';
import MealBook from 'components/atoms/MealBookList/MealBook/MealBook';
import styles from 'components/atoms/MealBookList/MealBookList.module.scss';


const MealBookList = ({meals}) => (
    
     <> 
    {meals.length !== 0 ? (
      <ul className={styles.wrapper}>
        {meals.map((item) => (
          <MealBook
            key={item.id}
            id={item.id}
            name={item.name}
       />
        ))}
      </ul>
    ) : null 
      

    }
    </>
   
);

export default MealBookList; 




