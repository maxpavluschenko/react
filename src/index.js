import * as serviceWorker from './serviceWorker';

import store from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updatePost={store.updatePost.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};
rerender(store.getState());

store.subscribe(rerender);

// If you want your app to work offline and load faster, yo u can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
