import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartR: (state, action) => {
      console.log(action.payload);
      state.products.push(action.payload);
      console.log(state.products);
    },
    changeQuantityR: (state, action) => {
      const { isAdd, index } = action.payload;
      const product = state.products[index];
      if (product) {
        isAdd ? product.quantity++ : product.quantity--;
      }
      console.log(state.products);
    },
    removeProductR: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.products.length) {
        state.products.splice(index, 1);
      }
      console.log(state.products);
    },
  },
});

export const { addToCartR, changeQuantityR, removeProductR } =
  cartSlice.actions;

export default cartSlice.reducer;
