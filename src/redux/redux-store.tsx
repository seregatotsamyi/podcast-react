import {applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//window.store = store;

export default store;