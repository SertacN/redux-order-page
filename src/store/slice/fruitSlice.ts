import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
type Fruit = {
  name: string;
  description: string;
  price: number;
  id?: string;
};

type FruitState = {
  search: string;
  data: Fruit[];
};

// Define the initial state using that type
const initialState: FruitState = {
  search: "",
  data: [],
};

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    addFruit: (state, action: PayloadAction<Fruit>): void => {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        id: nanoid(),
      });
    },
    deleteFruit: (state, action: PayloadAction<string | undefined>) => {
      const fruitId = action.payload;
      state.data = state.data.filter((item) => item.id !== fruitId);
    },
  },
});

export const { addFruit, deleteFruit } = fruitSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFruit = (state: RootState) => state.fruit;

export default fruitSlice.reducer;
