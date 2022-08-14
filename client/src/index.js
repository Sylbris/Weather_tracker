import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers';
import App from './App';
import { logger } from 'redux-logger';
import background from "./images/background.jpg";

const store = configureStore({reducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)});

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
 document.getElementById('root')
 );