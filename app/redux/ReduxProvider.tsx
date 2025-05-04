// app/redux/ReduxProvider.tsx
"use client";

import { Provider } from "react-redux";
import store from "./store/Store"; // ✅ adjust path if needed

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
