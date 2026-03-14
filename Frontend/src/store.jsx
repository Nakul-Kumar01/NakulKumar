import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./components/slice01";

const stores = configureStore({  
    reducer: { 
        slice1: chatReducer, 
    }
})

export default stores;

