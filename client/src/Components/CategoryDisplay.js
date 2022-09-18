import React from 'react';
import styles from  '../Assets/Css/CategoryDisplay.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../Store'
import CategoryPicture from './CategoryPicture';


export default function CategoryDisplay() {

    const activeCategory = useSelector(state =>state.category.activeCategory)    
    const dispatch = useDispatch();

    const categoryPictureArr = {
        "Special Offers":
        [
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger1',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger2',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger3',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger4',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger5',
            price: 500,
            },
        ],
        Meals: [
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger6',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger7',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger8',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger9',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger10',
            price: 500,
            },
        ],
        Snacks:[
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger11',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger12',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger13',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger14',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger15',
            price: 500,
            },
        ],
        Popular: [
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger16',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger17',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger18',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger19',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger20',
            price: 500,
            },
        ],
        "Family/Sharing":[
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger21',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger22',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger23',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger24',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger25',
            price: 500,
            },
        ],
        Midnight:[
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger26',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger27',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger28',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger29',
            price: 500,
            },
            {img: <img src={require('../Assets/Images/burger1.png')}></img>,
            description: 'this is the best burger in town',
            name: 'burger30',
            price: 500,
            },
        ]
    };



  return (
    <div className={styles.categoryPicturesSection}>
        <h1>{activeCategory.name}</h1>
        <div className={styles.categoryPictures}>
            {categoryPictureArr[activeCategory.name].map((elem)=>{
                return  <CategoryPicture categoryPicData={elem} key={elem.name} />
            })}
        </div>


    </div>
  )
}
