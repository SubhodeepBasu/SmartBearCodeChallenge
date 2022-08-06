/*
This file combines the two state slices
*/
import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./StoreInfoSlice";
import pathSlice from "./PathSlice";

const store = configureStore({
  reducer: { info: infoSlice.reducer, paths: pathSlice.reducer },
});

export default store;
