import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
type FormState = {
  name: string;
  description: string;
  price: number;
};

// Define the initial state using that type
const initialState: FormState = {
  name: "",
  description: "",
  price: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changedName: (state, action: PayloadAction<string>): void => {
      state.name = action.payload;
    },
    changedDescription: (state, action: PayloadAction<string>): void => {
      state.description = action.payload;
    },
    changedPrice: (state, action: PayloadAction<number>): void => {
      state.price = action.payload;
      if (state.price < 0) {
        state.price = 0;
      }
    },
  },
});

export const { changedName, changedDescription, changedPrice } =
  formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
