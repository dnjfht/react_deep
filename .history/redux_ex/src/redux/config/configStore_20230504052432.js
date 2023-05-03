// import { createStore, combineReducers } from "redux";
// import cat from "../modules/cat";

// const rootReducer = combineReducers({ cat: cat });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: {} });

export default store;
