import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import moviesReducer from "./movies-reducer.js";

let reducers=combineReducers({
    form:formReducer,
    movies:moviesReducer,
    app:appReducer
});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;