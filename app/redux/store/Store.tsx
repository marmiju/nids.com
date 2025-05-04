"use client";
import { configureStore } from "@reduxjs/toolkit";
import problemReducer from "../ProblemSlice";

const store = configureStore({
  reducer: {
    Problem: problemReducer,
  },
});

export default store;
