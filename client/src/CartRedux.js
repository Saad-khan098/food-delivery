import { createSlice, configureStore } from '@reduxjs/toolkit'



const initialState2 = {
    cartOpen: false,
    order:[],

  }
  
  export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState2,
  
    reducers: {
      
      hideCart: (state) => {
          state.cartOpen = false;
      },
      openCart: (state) => {
          state.cartOpen = true;
      },
      
      incrementItem:(state,action)=>{

        let isAlready = false;
        
        state.order.forEach((elem)=> {
          if(elem.name == action.payload.name){
            isAlready = true;
            elem.amount += 1;
          }
        })

        if(!isAlready){
          let obj = {...action.payload};
          state.order.push(obj);
          
        }


      },

      decrementItem:(state,action)=>{
        state.order.forEach((elem)=> {
          if(elem.name == action.payload.name){
            elem.amount -= 1;
          }
        })
        
      },
      deleteItem:(state,action)=> {
        state.order.forEach((elem, index)=> {
          if(elem.name == action.payload.name){
            state.order.splice(index,1);
          } 
        })
      }
    },
  })
  export const {hideCart, openCart,  incrementItem, decrementItem, deleteItem} = cartSlice.actions;