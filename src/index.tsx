import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import store  from "./redux/redux-store";
import {Provider} from "react-redux";



    ReactDOM.render(
        <BrowserRouter>
             <Provider store={store}>
                <App store={store}/>
             </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );













