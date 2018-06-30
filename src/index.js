import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter,Switch } from 'react-router-dom';

import RouterConfig from './router';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import store from './store.js';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouterConfig/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
