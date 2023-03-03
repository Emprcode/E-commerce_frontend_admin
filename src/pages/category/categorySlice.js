import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCats: (state, {payload}) => {
      state.cats = payload;
    },
  
  },
});

const { reducer, actions } = categorySlice;

export const { setCats } = actions;

export default reducer;
