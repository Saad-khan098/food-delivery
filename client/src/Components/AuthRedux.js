import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    
    authenticate: (state)=> {
        state.isAuth = true;
    },
    denyAuthenticate: (state)=> {
        state.isAuth = false;
    }
  },
})





export const { authenticate, denyAuthenticate } = authSlice.actions


