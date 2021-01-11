import React from 'react';
import styles from 'views/Nutrition/Nutrition.module.scss';
import NutritionPane from 'components/organisms/NutritionPane/NutritionPane';

class Nutrition extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <NutritionPane />
      </div>
    );
  }
}

export default Nutrition;
