import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/atoms/Product/Product.module.scss';

const Product = ({ name, grammage, goodness, protein, carbohydrates, fat }) => (
  <div className={styles.wrapper}>
    `${name}, ${grammage}, ${goodness}, ${protein}, ${carbohydrates}, ${fat}`
  </div>
);

Product.propTypes = {
  name: PropTypes.string,
  grammage: PropTypes.number,
  goodness: PropTypes.number,
  protein: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
};

Product.defaultProps = {
  name: 'produkt nieznany',
  grammage: 0,
  goodness: 0,
  protein: 0,
  carbohydrates: 0,
  fat: 0,
};

export default Product;
