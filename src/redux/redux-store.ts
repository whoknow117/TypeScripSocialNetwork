import {combineReducers, createStore, Store} from "redux";
import profileReducer, {AddPostActionType, ChangeNewTextActionType, ProfilePageType} from "./profileReducer";
import dialogReducer, {ChangeNewMessageBodyACType, DialogPageType, SendMessageBodyACType} from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";



export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType


}



export type ActionTypes = AddPostActionType | ChangeNewTextActionType | ChangeNewMessageBodyACType | SendMessageBodyACType
export type  StateReducersType = ReturnType<typeof reducers>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

export type RootStateType = Store<StateReducersType, ActionTypes>

let store = createStore(reducers);



export default store;