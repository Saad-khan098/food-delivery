import React, {useState} from 'react'
import styles from '../Assets/Css/Browse.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../Redux'
import { store } from '../Store'


const categories = [
    {name: 'Special Offers', type: 'active', img: <img src={require('../Assets/Images/burger1.png')}></img>},
    {name: 'Meals', type: 'active', img: <img src={require('../Assets/Images/burger1.png')}></img>},
    {name: 'Snacks', type: 'active', img: <img src={require('../Assets/Images/burger1.png')}></img>},
    {name: 'Popular', type: 'active', img: <img src={require('../Assets/Images/burger1.png')}></img>},
    {name: 'Family/Sharing', type: 'active', img: <img src={require('../Assets/Images/burger1.png')}></img>},
    {name: 'Midnight', type: 'inActive', img: <img src={require('../Assets/Images/burger1.png')}></img>},
]

function Category({category, index}){

    const activeCategory = useSelector(state => state.category.activeCategory)    
    const dispatch = useDispatch();

    return (
        <div className={`${styles.category} bg-red ${activeCategory.index==index?styles.active:''}`} onClick={()=>dispatch(setCategory({index, name: category.name}))} >
            <h4>{category.name}</h4>
            {category.img}
        </div>
    )
}
export default function Browse() {

    

  return (
    <>
        <h1>Browse By Category</h1>
        <div className={`${styles.categories}`}>
            {categories.map((elem,index)=> <Category category={elem} index={index}/>)}
        </div>
    </>
  )
}
