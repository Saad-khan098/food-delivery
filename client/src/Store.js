import { categorySlice } from "./Redux"
import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./CartRedux.js"
import { authSlice } from "./Components/AuthRedux"

export const store = configureStore({
    reducer: {category: categorySlice.reducer, cart: cartSlice.reducer, auth: authSlice.reducer},
}) 