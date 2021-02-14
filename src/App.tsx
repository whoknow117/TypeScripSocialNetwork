import React from 'react';
import classes from './App.module.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import {RootStateType} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";


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

           <div className={classes.routeWrapper}>
               <Route exact path='/profile'
                      render={() => <Profile />}/>
               <Route path="/dialogs"
                      render={() => <Dialogs store={store}/>}/>
               <Route path="/users" render={() => <UsersContainer />}/>
           </div>


        </div>
    );
}

export default App;
