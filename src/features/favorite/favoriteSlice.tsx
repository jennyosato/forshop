import { createSlice } from "@reduxjs/toolkit";

const initialState:any[] = []

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite : (state, action) => {
            const isLiked = state.find(item => item.name === action.payload.name)
            !isLiked && state.push(action.payload) 
        },
        removeFavorite : (state, action) => {
            return state.filter(item => item.name !== action.payload.name)
        }
    }
})
export const favoriteList = (state:any) => state.favorite
export const {addFavorite, removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer