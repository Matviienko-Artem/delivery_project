import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("localCart"));

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState || [],
  reducers: {
    addToCart: (state, { payload }) => {
      const newCartItem = {
        ...payload,
        total: payload.price * payload.amount,
      };

      if (!state.find((item) => item.dish === payload.dish)) {
        localStorage.setItem("localCart", JSON.stringify([...state, newCartItem]));

        return [...state, newCartItem];
      } else {
        state.map((item) => {
          if (item.dish === payload.dish) {
            item.amount = item.amount + 1;
            item.total = item.price * item.amount;
          }
        });
        localStorage.setItem("localCart", JSON.stringify(state));
      }
    },

    incrementAmount: (state, { payload }) => {
      state.map((item) => {
        if (item._id === payload._id) {
          item.amount = item.amount + 1;
          item.total = item.price * item.amount;
        }
      });
      localStorage.setItem("localCart", JSON.stringify(state));
    },

    decrementAmount: (state, { payload }) => {
      if (payload.amount === 1) {
        const filtredState = state.filter((item) => item._id !== payload._id);
        localStorage.setItem("localCart", JSON.stringify(filtredState));

        return filtredState;
      }
      state.map((item) => {
        if (item._id === payload._id) {
          item.amount = item.amount - 1;
          item.total = item.price * item.amount;
        }
      });
      localStorage.setItem("localCart", JSON.stringify(state));
    },
    deleteCart: (state, _) => {
      localStorage.setItem("localCart", JSON.stringify([]));
      return (state = []);
    },
  },
});

export const { addToCart, incrementAmount, decrementAmount, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
