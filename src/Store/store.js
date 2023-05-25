import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "../Reducer/StudentSlice";
const store = configureStore({
  reducer: {
    studentslice: studentReducer,
  },
});

export default store;
