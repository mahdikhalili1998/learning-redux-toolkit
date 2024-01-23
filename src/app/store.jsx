import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice/Counter";

const store = configureStore({ reducer: { konter: counterReducer } });
export default store;
