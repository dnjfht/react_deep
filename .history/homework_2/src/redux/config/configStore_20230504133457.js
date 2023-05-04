import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({});

const store = createStore(rootReducer);

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import catReducer from "../modules/catSlice";

// const store = configureStore({
//   reducer: {
//     cat: catReducer,
//   },
// });
