import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import store, {StateReducersType} from "./redux/redux-store";
import StoreContext from "./StoreContext";


let rerenderEntireTree = (state:StateReducersType ) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App store={store}/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})










