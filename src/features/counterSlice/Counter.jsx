import { createSlice } from "@reduxjs/toolkit";
const initialState = { counterValue: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => state.counterValue++,
    decrease: (state, action) => state.counterValue--,
  },
});
export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
