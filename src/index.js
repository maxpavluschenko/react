import * as serviceWorker from './serviceWorker';

import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root'));
};

rerender(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerender(state);
});

serviceWorker.unregister();
