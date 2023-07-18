import { createSlice } from "@reduxjs/toolkit";

const initialState:any[] = []
const countSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const inCart = state.find(item => item.name === action.payload.name)
           !inCart && state.push(action.payload) 
        },
        removeFromCart: (state, action) => {
          return state.filter(item => item.name !== action.payload.name)
        },
        increaseQty: (state, action) => {
            const {name} = action.payload
            const itemQty = state.find(item => item.name === name)
            if(itemQty){
                itemQty.qty += 1
            }
        },
        decreaseQty:  (state, action) => {
            const {name} = action.payload
            const itemQty = state.find(item => item.name === name)
            if(itemQty && itemQty.qty > 1){
                itemQty.qty -= 1
            }else{
               return state.filter(item => item.name !== itemQty.name)
            }
    }}
})
export const selectProducts = (state:any) => state.cart
export const {addToCart, increaseQty, decreaseQty, removeFromCart} = countSlice.actions

export default countSlice.reducer