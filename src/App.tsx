import React from 'react';
import classes from './App.module.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import {RootStateType} from "./redux/redux-store";


type AppPropsType = {
    store: RootStateType

}


const App: React.FC<AppPropsType> = ({store}) => {

    let state = store.getState();
    let dialogsPage = state.dialogsPage
    let profilePage = state.profilePage;
    let sidebar = state.sidebar


    return (
        <div className={classes.wrapper}>

            <Header/>
            <Sidebar
                sidebar={sidebar}

            />

            <Route exact path='/profile'
                   render={() => <Profile store={store}/>}/>
            <Route path="/dialogs"
                   render={() => <Dialogs store={store}/>}/>


        </div>
    );
}

export default App;
