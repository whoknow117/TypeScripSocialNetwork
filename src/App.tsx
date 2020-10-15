import React from 'react';
import './App.scss';
import Header from './components/Header/Header';

import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



function App() {
    return (
        <div className="App">
            <div className='wrapper'>
                <Header />
                <Sidebar/>
                <Route exact path='/' render={ () => <Profile/> } />
                <Route path="/dialogs" render={ () => <Dialogs/> } />

            </div>
        </div>
    );
}

export default App;
