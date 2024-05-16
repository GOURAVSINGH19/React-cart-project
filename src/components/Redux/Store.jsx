import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import Apidata from "./Apidata";

const store = configureStore({
    reducer: {
        CartSlice:CartSlice,
        Apidata:Apidata
    }
})

export default store;