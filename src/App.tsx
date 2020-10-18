import React from 'react';
import classes from './App.module.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import store from "./redux/store";
 

  
 

const App = () => {
    debugger

    let dialogsPage = store._state.dialogsPage;

    return (
        <div className={classes.wrapper}>

                <Header />
                <Sidebar/>
                <Route exact path='/profile' render={() => <Profile />}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={dialogsPage}/>}/>



        </div>
    );
}

export default App;
