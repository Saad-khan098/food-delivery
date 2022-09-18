import React, {useState} from 'react'
import styles from  '../Assets/Css/CategoryPicture.module.css';
import { FaPlus, FaMinus } from "react-icons/fa";
import { incrementItem, decrementItem, deleteItem } from '../CartRedux';
import { useSelector, useDispaych, useDispatch } from 'react-redux';


export default function ({categoryPicData}) {

  
  const{img, description, name, price} = categoryPicData;
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);

  var amount1 = 0;
  cart.order.forEach((elem)=> {
    if(elem.name == name) amount1 = elem.amount;
  })

  console.log('-----')
  console.log(amount1)

  function increment(){

    
    let obj = {
      name: name,
      price: price,
      amount: amount1 + 1
    }
    
    dispatch(incrementItem(obj));
    
  }

  function decrement(){
    if(amount1 == 1){
      dispatch(deleteItem({name}))
      return;
    }
    dispatch(decrementItem({name}));
  }

  console.log(cart)
  

  return (
    <div className={styles.categoryPic}>
      {name + ' '}
      {" " + price}Rs
        {img}
        <p>{description}</p>
        {
          amount1 > 0 &&
          <>
          <FaPlus onClick={increment}/>
          <p>{amount1 + ' '}</p>
          <FaMinus onClick={decrement}/>
          </>
        }
        <button onClick={increment} >Add to cart</button>
    </div>
  )
}
