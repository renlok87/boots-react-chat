import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {sagaMiddleware, store} from "./store/store";

// send dispatch and saga to open web socket connection when user enter name
ReactDOM.render(
    <Provider store={store}>
        <App
            dispatch={store.dispatch}
            saga={sagaMiddleware}
        />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
