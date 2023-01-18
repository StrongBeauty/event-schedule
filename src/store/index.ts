import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/auth";
import EventReducer from "./reducers/event";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    auth: authReducer,
    event: EventReducer,
})

export const store = legacy_createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch