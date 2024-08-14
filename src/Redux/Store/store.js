import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Reducer/cart"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const storageConfig = {


    key: "root",
    storage

}
const allReducers = combineReducers({
    cart: cartSlice
})

const persistFunction = persistReducer(storageConfig ,allReducers)

const store = configureStore({
   reducer: persistFunction
})


export default store