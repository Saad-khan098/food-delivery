import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function ViewOrder() {

    const cart = useSelector(state=>state.cart);
    const auth = useSelector(state=>state.auth);
    console.log(cart)

  return (
    <div>
        <h1>Your order has been placed</h1>
        {cart.order.map((elem)=> {
            return (
                <>
                    <p>{elem.name}</p>
                    <p>{elem.amount}</p>
                    <p>{elem.price * elem.amount}</p>
                </>

            )
        })}
    </div>
  )
}
