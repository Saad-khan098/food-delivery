import React from 'react'
import styles from '../Assets/Css/Navbar.module.css'
import { FaBeer } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from 'react-redux';
import { hideCart, openCart } from '../CartRedux';
import axios from 'axios';
import { denyAuthenticate } from './AuthRedux';
import { Link } from 'react-router-dom';



export default function Navbar() {

    const cart = useSelector(state=> state.cart);
    const auth = useSelector(state=> state.auth);
    const isAuth = auth.isAuth;

    const dispatch = useDispatch();

    function openCartFunction(){
        console.log('opencart')
        dispatch(openCart());
    }
    
    const logout = async ()=>{
        console.log('asjknfjkaskf')
        axios.defaults.withCredentials = true;
        const response = await axios.get('http://localhost:5000/logout');

        window.location.reload();

        
    }   




  return (
    <nav>
        <div className={styles.logoContainer}>
            <img src={require('../Assets/Images/logo.png')} alt="" />
        </div>
        <div className={styles.rightSide}>
            <div className={styles.cartIcon} >
                <IconContext.Provider value={{ size: '32px',}}>
                    <FaShoppingCart onClick={openCartFunction} />
                </IconContext.Provider>
                <div className={styles.count}>{cart.order.length}</div>
            </div>
            {isAuth &&
            <>
                <IconContext.Provider value={{ size: '32px',}}>
                    <CgProfile />
                </IconContext.Provider>
                <button onClick={logout} >logout</button>
            </>
            }
            {!isAuth &&
            <>
                <Link to={'/signup'} >
                    <button className='outline'>Sign Up</button>
                </Link>
                <Link to={'/login'} >
                    <button>Login</button>
                </Link>
            </>
            }

        </div>
    </nav>
  )
}
