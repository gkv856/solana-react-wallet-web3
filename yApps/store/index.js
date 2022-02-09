import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countSlice";
import web3Slice from "./web3Slice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    web3Slice: web3Slice.reducer,
  },
});

export default store;
