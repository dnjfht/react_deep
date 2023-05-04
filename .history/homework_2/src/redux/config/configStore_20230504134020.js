import { createStore, combineReducers } from "redux";
import til from "../modules/til";

const rootReducer = combineReducers({ til: til });

const store = createStore(rootReducer);

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import catReducer from "../modules/catSlice";

// const store = configureStore({
//   reducer: {
//     cat: catReducer,
//   },
// });
