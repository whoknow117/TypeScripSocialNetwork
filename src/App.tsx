import React from 'react';
import classes from './App.module.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import {ActionTypes, RootStateType, StateType} from "./redux/store";



type AppPropsType = {
    store: RootStateType

}


 

const App: React.FC<AppPropsType> = ({  store}) => {

    let state = store.getState();
    let dialogsPage =  state.dialogsPage
    let profilePage =  state.profilePage;


    return (
        <div className={classes.wrapper}>

                <Header />
                <Sidebar/>
                <Route exact path='/profile' render={() => <Profile dispatch={store.dispatch.bind(store)} profilePage={profilePage}/>}/>
                <Route path="/dialogs" render={() => <Dialogs  dispatch={store.dispatch.bind(store)} dialogsPage={dialogsPage}/>}/>



        </div>
    );
}

export default App;
