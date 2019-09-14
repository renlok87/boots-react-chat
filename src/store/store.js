import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import * as reducers from "../redux/reducers/index";


export const sagaMiddleware = createSagaMiddleware()

 export const store = createStore(
    combineReducers(reducers),
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ?
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() :
            compose,
    )
);