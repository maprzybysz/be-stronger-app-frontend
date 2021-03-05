import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from 'components/templates/ShoppingTemplate/ShoppingTemplate.module.scss';
import ShoppingList from 'components/nutritionComponents/atoms/ShoppingList/ShoppingList';
import {getShoppingList} from 'actions';


const ShoppingTemplate = ({getShoppingList, shoppingList}) => {
  useEffect(()=>{
    getShoppingList();
  }, [shoppingList.length])

  return(
    <div className={styles.wrapper}>
      <ShoppingList products={shoppingList}/>
    </div>
  )

}
ShoppingTemplate.propTypes = {
  shoppingList: PropTypes.arrayOf(
    PropTypes.shape({


    }),
  ).isRequired,
  getShoppingList: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => ({
  getShoppingList: () => dispatch(getShoppingList()),
})

const mapStateToProps = ({shoppingList }) => ({
  shoppingList
})


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTemplate);