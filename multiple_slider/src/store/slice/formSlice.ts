import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
type FormState = {
  name: string;
  description: string;
  price: number;
  value: number;
};

// Define the initial state using that type
const initialState: FormState = {
  name: "",
  description: "",
  price: 0,
  value: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
});

// export const {} = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectForm = (state: RootState) => state.form.value;

export default formSlice.reducer;
