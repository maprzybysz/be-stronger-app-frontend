import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styles from 'components/templates/ShoppingTemplate/ShoppingTemplate.module.scss';
import ShoppingList from 'components/nutritionComponents/atoms/ShoppingList/ShoppingList';
import {getShoppingList} from 'actions';


const ShoppingTemplate = ({getShoppingList, shoppingList}) => {
  useEffect(()=>{
    getShoppingList();
  }, [])

  return(
    <div className={styles.wrapper}>
      <ShoppingList products={shoppingList}/>
    </div>

  )

}

const mapDispatchToProps = (dispatch) => ({
  getShoppingList: () => dispatch(getShoppingList()),
})

const mapStateToProps = ({shoppingList }) => ({
  shoppingList
})


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTemplate);