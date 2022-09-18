import React from 'react'
import styles from '../Assets/Css/Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function OrderCart() {

  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  let {order} = cart;

  let bill = 0;

  order.forEach((elem)=> {
    bill += (elem.price * elem.amount);
  })

  function checkout(){
    console.log('checkout')
  }


  return (
    <div className={styles.cart} >
      {order.map((elem)=>{
        return <CartItem data={elem}  />
      })}

      <h3>CheckOut</h3>
      <h4>Total Bill: </h4>
      <p>{bill}</p>
      <Link to={'/checkout'} >
        <button onClick={checkout} className={styles.button} >Checkout</button>
      </Link>
    </div>
  )
}
