import { combineReducers } from "@reduxjs/toolkit";
import home from "../redux/home"
import global from "../redux/global"

export const allReducer = () =>
  combineReducers({
    home,
    global,
});
