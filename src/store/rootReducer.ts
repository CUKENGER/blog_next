import { combineReducers } from "redux";
import authSlice from "./slices/auth";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
})