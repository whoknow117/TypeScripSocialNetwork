import {combineReducers, createStore, Store} from "redux";
import profileReducer    from "./profileReducer";
import dialogReducer    from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import {ActionTypes, DialogPageType, ProfilePageType, UsersPageType} from "../types/types";
import usersReducer from "./usersReducer";


debugger

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    usersPage: UsersPageType

}




export type  StateReducersType = ReturnType<typeof reducers>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type RootStateType = Store<StateReducersType, ActionTypes>

let store = createStore(reducers);



export default store;



