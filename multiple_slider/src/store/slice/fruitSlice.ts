import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
type FruitState = {
  search: string;
  data: [];
  value: number;
};

// Define the initial state using that type
const initialState: FruitState = {
  search: "",
  data: [],
  value: 0,
};

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {},
});

// export const {} = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFruit = (state: RootState) => state.fruit.value;

export default fruitSlice.reducer;
