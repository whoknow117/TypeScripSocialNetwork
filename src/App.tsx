import React from 'react';
import classes from './App.module.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import {RootStateType} from "./redux/redux-store";
import Users from "./components/Users/Users";


type AppPropsType = {
    store: RootStateType

}


const App: React.FC<AppPropsType> = ({store}) => {

    let state = store.getState();
    let sidebar = state.sidebar


    return (
        <div className={classes.wrapper}>

            <Header/>
            <Sidebar
                sidebar={sidebar}

            />

            <Route exact path='/profile'
                   render={() => <Profile />}/>
            <Route path="/dialogs"
                   render={() => <Dialogs store={store}/>}/>
            <Route path={"/users"} render={() => <Users/>}/>


        </div>
    );
}

export default App;
