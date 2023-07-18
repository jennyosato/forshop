import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../src/features/cart/CartSlice'
import favoriteReducer from '../src/features/favorite/favoriteSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'






export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
    }
    
})