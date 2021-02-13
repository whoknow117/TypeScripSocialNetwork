import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import store, {StateReducersType} from "./redux/redux-store";

import {Provider} from "react-redux";


let rerenderEntireTree = (state:StateReducersType ) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})










