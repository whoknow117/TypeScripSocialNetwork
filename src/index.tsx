import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.scss';
import { BrowserRouter} from 'react-router-dom';
import store from './redux/store';





    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );




