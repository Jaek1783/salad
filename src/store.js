
import { createStore, combineReducers } from "redux";
import Real from "./Redux/Real";
import Event from "./Redux/Event";
import Menu from "./Redux/Menu";
const rootReducer = combineReducers({ Real, Event, Menu });

const store = createStore(rootReducer);

export default store;