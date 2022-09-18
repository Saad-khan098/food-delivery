import React, { useEffect, useState, } from 'react'
import styles from '../Assets/Css/SlideShow.module.css'

export default function SlideShow() {


    const imgArr = [
        <img src={require('../Assets/Images/deal1.jpg')} alt="" />,
        <img src={require('../Assets/Images/deal2.jpg')} alt="" />,
        <img src={require('../Assets/Images/deal3.jpg')} alt="" />,
    ]

    const [currentImage, setcurrentImage] = useState({img: imgArr[0], index: 0});

    useEffect(()=> {
        const a = setTimeout(()=> {
        
            setcurrentImage((prev)=>{
                if(prev.index == imgArr.length -1){
                    return {img:imgArr[0], index:0};
                } 
    
                return {img: imgArr[prev.index + 1] , index: prev.index + 1 }
    
            })
        },3000)

        return ()=> {
            clearTimeout(a);
        }
    })

    


    

    useEffect(() => {

        
    }, [])







    return (
        <div className={styles.slideShow} >
            {currentImage.img}
        </div>
    )
}
