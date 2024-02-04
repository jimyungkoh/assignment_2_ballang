import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 장바구니에 상품 한개 담기
    addItem: {
      reducer(state, action) {
        const { productId, size } = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.productId === productId && item.size === size
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({
            ...action.payload,
            id: productId,
            quantity: 1,
          });
        }
      },
      prepare(productId, size) {
        return { payload: { productId, size } };
      },
    },
    // 장바구니에 상품 여러개 담기
    addItems: {
      reducer(state, action) {
        const { productId, size, quantity } = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.productId === productId && item.size === size
        );
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.cartItems.push({
            productId,
            size,
            quantity,
          });
        }
      },
      prepare(productId, size, quantity) {
        return { payload: { productId, size, quantity } };
      },
    },
    // 상품 제거
    removeItem(state, action) {
      const { productId, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item.productId === productId && item.size === size)
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
