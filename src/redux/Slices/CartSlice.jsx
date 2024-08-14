import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id!== action.payload.id);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action)
}
}})
export const{addItem,removeItem} = CartSlice.actions;
export default CartSlice.reducer;