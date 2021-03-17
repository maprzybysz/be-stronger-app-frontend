import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addShoppingListElement, getShoppingList } from 'actions/index';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from 'components/nutritionComponents/atoms/ShoppingList/ShoppingList.module.scss';
import ShoppingListElement from './ShoppingListElement/ShoppingListElement';

const ShoppingList = ({products, addShoppingListElement}) => {

  const [value, setValue] = useState('');

  function helpFunction(){
    addShoppingListElement(value)
    setValue('');
  }

  return (
    <ul className={styles.wrapper}>
      {products.map((item, index) => (
        <ShoppingListElement key={item.id} id={item.id} listElement={item.listElement} index={index} />
      ))}
      <li className={styles.listItem}>{products.length + 1}.
        <input className={styles.input} type='text' placeholder='Dodaj produkt do listy zakupów' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='button' onClick={value.length>0 ? () => helpFunction() : null} className={styles.button} ><FontAwesomeIcon icon={faPlus} /></button>
      </li>
    </ul>
  )

}

ShoppingList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    listElement: PropTypes.string
  })).isRequired,
  addShoppingListElement: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addShoppingListElement: (value) => dispatch(addShoppingListElement(value)),
  getShoppingList: () => dispatch(getShoppingList()),
})

export default connect(null, mapDispatchToProps)(ShoppingList);