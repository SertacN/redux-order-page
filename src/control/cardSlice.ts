import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import cardData from "../data";
import { initialStateProps } from "../appType";

const initialState: initialStateProps = {
  cardItem: cardData,
  quantity: 0,
  total: 0,
  value: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state): void => {
      state.cardItem = [];
    },
    increase: (state, action: PayloadAction<number | string>): void => {
      const cardItems = state.cardItem.find(
        (item) => item.id === action.payload
      );
      if (cardItems !== undefined) {
        cardItems.quantity += 1;
      }
    },
    decrease: (state, action: PayloadAction<number | string>): void => {
      const cardItems = state.cardItem.find(
        (item) => item.id === action.payload
      );
      if (cardItems !== undefined) {
        cardItems.quantity -= 1;
      }
      const itemId = action.payload;
      if (cardItems?.quantity === 0) {
        state.cardItem = state.cardItem.filter((item) => item.id !== itemId);
      }
    },
    calculateTotal: (state): void => {
      let quantity = 0;
      let total = 0;
      state.cardItem.forEach((item) => {
        quantity += item.quantity;
        total += item.price * item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
    addCards: (state): void => {
      state.cardItem = cardData;
    },
  },
});

export const { clearCard, increase, decrease, calculateTotal, addCards } =
  cardSlice.actions;

export const selectCard = (state: RootState) => state.card.value;

export default cardSlice.reducer;
