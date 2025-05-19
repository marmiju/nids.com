"use client";

import { configureStore } from "@reduxjs/toolkit";
import ProblemReducer from "../ProblemSlice";
import InfoReducer from "../InfoSlice";

const store = configureStore({
  reducer: {
    Problem: ProblemReducer,
    info: InfoReducer,
  },
});

export default store;
