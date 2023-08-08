import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import cardData from "../data";

type initialState = {
  cardItem: Array<object>;
  quantity: number;
  total: number;
  value: number;
};

const initialState: initialState = {
  cardItem: cardData,
  quantity: 4,
  total: 0,
  value: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItem = [];
    },
  },
});

export const { clearCard } = cardSlice.actions;

export const selectCard = (state: RootState) => state.card.value;

export default cardSlice.reducer;
