import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as authReducer} from "./auth/reducer"
import {reducer as prodReducer} from "./product/reducer"
import {thunk} from "redux-thunk"
const rootReducer =combineReducers({authReducer,prodReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))