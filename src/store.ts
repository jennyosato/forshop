import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
