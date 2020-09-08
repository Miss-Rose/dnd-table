import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise-middleware';
import rootReducer from "./redux/reducers/rootReducer";
import HomePage from "./pages/HomePage";


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        reduxPromise,
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <HomePage/>
    </Provider>,
    document.getElementById('root')
);