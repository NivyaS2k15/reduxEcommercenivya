import { configureStore } from "@reduxjs/toolkit";
import  productSlice from './slices/productSlice'

 const  cartStore = configureStore({
    reducer:{
    

        ProductReducer: productSlice
    }
})

export default cartStore