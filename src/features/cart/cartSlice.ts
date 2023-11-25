import { ProductInventory } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductInventory[] = [];
const countSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInventory>) => {
      const inCart = state.find(
        (product) => product.name === action.payload.name
      );
      !inCart && state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<ProductInventory>) => {
      return state.filter((product) => product.name !== action.payload.name);
    },
    increaseQty: (state, action: PayloadAction<ProductInventory>) => {
      const { name } = action.payload;
      const product = state.find((product) => product.name === name);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQty: (state, action: PayloadAction<ProductInventory>) => {
      const { name } = action.payload;
      const product = state.find((product) => product.name === name);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        return state.filter((item) => item.name !== product?.name);
      }
    },
  },
});
export const selectProducts = (state: any) => state.cart;
export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
  countSlice.actions;

export default countSlice.reducer;
