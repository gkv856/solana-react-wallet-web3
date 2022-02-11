import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
  },
});

export default store;
