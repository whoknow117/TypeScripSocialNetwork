import React from 'react';
import classes from './App.module.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import {RootStateType, StateType} from "./redux/store";
import { addPost } from "./redux/store";


type AppPropsType = {
    store: RootStateType
}


 

const App: React.FC<AppPropsType> = ({store}) => {


    let dialogsPage = store._state.dialogsPage
    let profilePage = store._state.profilePage;

    return (
        <div className={classes.wrapper}>

                <Header />
                <Sidebar/>
                <Route exact path='/profile' render={() => <Profile addPost={addPost} profilePage={profilePage}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={dialogsPage}/>}/>



        </div>
    );
}

export default App;
