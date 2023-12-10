import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { allReducer } from "../redux/rootReducer";

export const store = configureStore({ reducer: allReducer });

export const initStore = () => {
  return configureStore({
    reducer: allReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export const wrapper = createWrapper(initStore, {
  debug: false,
});