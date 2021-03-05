import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {deleteShoppingListElement} from 'actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from 'components/nutritionComponents/atoms/ShoppingList/ShoppingListElement/ShoppingListElement.module.scss';


const ShoppingListElement = ({listElement, index, id, deleteShoppingListElement })=>(

  <li className={styles.listItem}>{index+1}. {listElement}
  <FontAwesomeIcon icon={faCheck} onClick={()=>deleteShoppingListElement(id)} className={styles.checkButton}/></li>
)


ShoppingListElement.propTypes = {
  listElement: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  deleteShoppingListElement: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  deleteShoppingListElement: (id)=>dispatch(deleteShoppingListElement(id)),
})

export default connect(null, mapDispatchToProps)(ShoppingListElement);