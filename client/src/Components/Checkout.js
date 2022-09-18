import React, {useState} from 'react'
import styles from '../Assets/Css/Checkout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const cart = useSelector(state=>state.cart);
    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    let bill = 0;

    const navigate = useNavigate();

    const {order} = cart;
    console.log(cart)


    const [address, setaddress] = useState('');

    async function getAddress(){
      console.log('fetching you address')
      try{
        const response = await axios.get('http://localhost:5000/address')
        setaddress(response.data.addressLine)
      }
      catch(error){
        console.log(error);
        if(error.response.status == 403){
          setaddress('');
        }
      }
    }
    getAddress();

    async function placeOrder(){
      console.log('placeing order');

      // if(auth.isAuth && address != '' && cart.order.length > 0){
      //   axios.post('http://localhost:5000/order', {
      //     cart: cart,
      //     address: address
      //   })
      // }
      // else alert('First signup/login then enter an address');

      if(!auth.isAuth){
        navigate('/login');
        return;
      }
      if(address == ''){
        alert('enter an address')
        return;
      }
      if(cart.order.length <= 0){
        alert('Your cart is empty');
        return
      }

      console.log('all conditions matched')

      axios.post('http://localhost:5000/order', {
          cart: cart,
          address: address
      }).then(()=> {
        console.log('done')
        navigate('/vieworder')
      })


      

      

    }
    

  return (

    <div className={styles.checkout}>
        <h1>Your Order:</h1>

        

        {order.map((elem, index)=>{
            console.log('afsanfj')
            console.log('asfnsdjfn')
            return (

            <div className={styles.orderNumber} >
                <p>{index + 1}</p>
                <p>{elem.name}</p>
                <p>{elem.amount}</p>
                <p>{elem.amount * elem.price}</p>
            </div>
            )
        })}

        <h3>Your Address</h3>
        <p>{address}</p>
        <Link to={'/enteraddress'} >
          <button>change Address</button>
        </Link>

        <button onClick={placeOrder} >Place Order</button>        

    </div>
  )
}
