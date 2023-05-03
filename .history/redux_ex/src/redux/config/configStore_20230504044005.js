import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ cat: cat });

const store = createStore(rootReducer);

export default store;
