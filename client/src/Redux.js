import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    activeCategory:{index: 0, name: 'Special Offers'}
}


export const categorySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    setCategory: (state,action) => {
        state.activeCategory.index = action.payload.index;
        state.activeCategory.name = action.payload.name;
    }
  },
})





export const { setCategory } = categorySlice.actions


