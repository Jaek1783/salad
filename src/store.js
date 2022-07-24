
import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Real from "./Redux/Real";
import Event from "./Redux/Event";
import Menu from "./Redux/Menu";

const rootReducer = combineReducers({ Real, Event, Menu });
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares); 

const store = createStore(rootReducer, enhancer);

export default store;