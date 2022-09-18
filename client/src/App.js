import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import styles from './Assets/Css/App.module.css'
import './App.css'
import SlideShow from './Components/SlideShow'
import Browse from './Components/Browse'
import { Provider } from 'react-redux'
import CategoryDisplay from './Components/CategoryDisplay'
import { useDispatch, useSelector } from 'react-redux'
import OrderCart from './Components/OrderCart'
import { hideCart, openCart } from './CartRedux'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ReactDOM from "react-dom/client";
import axios from 'axios';
import Checkout from './Components/Checkout'
import EnterAddress from './Components/EnterAddress'
import { authenticate, denyAuthenticate } from './Components/AuthRedux'
import ViewOrder from './Components/ViewOrder'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  console.log('app')

  const auth = useSelector(state=> state.auth);
  console.log(auth)
  const dispatch = useDispatch();


  const defaultFunc = ()=> {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:5000/').then((response) => {
      console.log(response)
      response.data.isAuth? dispatch(authenticate()): dispatch(denyAuthenticate());
      console.log(auth)
    }).catch(error=>{
      console.log(error);
      if(error.response.status == 409) dispatch(denyAuthenticate());
    })
  }
  useEffect(() => {
    defaultFunc();
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/enteraddress" element={<EnterAddress />} />
          <Route path="/viewOrder" element={<ViewOrder />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const hideCartFunction = () => {
    dispatch(hideCart());
  }

  const [cartHidden, setcartHidden] = useState(true);

  function manageCart() {
    if (cart.cartOpen) {
      hideCartFunction();
    }

  }
  return (
    <>
      <div className={`${styles.container} container1`}  >
        <Navbar />
        <SlideShow />
        <Browse />
        <CategoryDisplay />
      </div>
      {cart.cartOpen &&
        <div className={styles.overlay} onClick={manageCart} ></div>
      }

      {cart.cartOpen &&
        <div className="container2">
          <OrderCart />
        </div>
      }
    </>
  )
}
