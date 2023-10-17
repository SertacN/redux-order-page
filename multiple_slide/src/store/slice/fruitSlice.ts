import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state

type FruitState = {
  search: string;
  data: [];
};

// Define the initial state using that type
const initialState: FruitState = {
  search: "",
  data: [],
};

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {},
});

// export const {  } = fruitSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFruit = (state: RootState) => state.fruit;

export default fruitSlice.reducer;
