import React from 'react'
import styles from '../Assets/Css/CartItem.module.css'
import { useDispatch } from 'react-redux'
import { incrementItem, decrementItem, deleteItem } from '../CartRedux'
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";


export default function CartItem({data}) {
    console.log(data)
    const {name,amount,price} = data;

    const dispatch = useDispatch();

    function increment(){
        console.log('increment')
        dispatch(incrementItem(data))
    }
    function decrement(){
        if(amount == 1) {
            dispatch(deleteItem(data))
            return
        }
        dispatch(decrementItem(data))
    }
    
    function del(){
        console.log('delete')
        dispatch(deleteItem(data))

    }
  return (
    <div className={styles.cartItem} >
        <p>{data.name}</p>
        <FaMinus onClick={decrement} />
        <p>{data.amount}</p>
        <FaPlus onClick={increment} />
        <p>{data.price}</p>
        <FaTimes onClick={del} />
        
    </div>
  )
}
