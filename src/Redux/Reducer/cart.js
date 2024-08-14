import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0
    }, 


    reducers: {
        addItemToCart: (state, action) =>{
            state.items.push(action.payload)
        },
        calculatePrice: (state) =>{
            let total= 0
            state.items.forEach((product) =>{
                total+= product.price
            })
            state.totalPrice= total
        },
        removeItemFromCart : (state, action) =>{
            state.items= state.items.filter( (product) => product.id != action.payload.id)
        }
    }
})


export const {addItemToCart, removeItemFromCart ,calculatePrice} = cartSlice.actions
export default cartSlice.reducer





// PayLoad= stores comes data