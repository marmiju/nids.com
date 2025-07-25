"use client";

import { configureStore } from "@reduxjs/toolkit";
import ProblemReducer from "../ProblemSlice";
import InfoReducer from "../InfoSlice";

export const store = configureStore({
  reducer: {
    Problem: ProblemReducer,
    info: InfoReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
