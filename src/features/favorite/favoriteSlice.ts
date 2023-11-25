import { Product } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      const isLiked = state.find(
        (product) => product.name === action.payload.name
      );
      !isLiked && state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Product>) => {
      return state.filter((product) => product.name !== action.payload.name);
    },
  },
});
export const favoriteList = (state: any) => state.favorite;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
