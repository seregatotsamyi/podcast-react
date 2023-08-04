import {applyMiddleware, combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"

const {createStore} = require("redux")

let rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

export default store