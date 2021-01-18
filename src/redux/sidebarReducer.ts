import {v1} from "uuid";
import {ActionTypes} from "./redux-store";

export type SidebarType = {
    id: string
    title: string
    path: string
}

type InitialStateType = {
    sidebar: Array<SidebarType>
}

let initialState:InitialStateType  = {
    sidebar: [
        {id: v1(), title:'Profile', path:'/profile' },
        {id: v1(), title: 'Messages', path:'/dialogs' },
        {id: v1(), title: 'News', path:'/News' },
        {id: v1(), title: 'Profile', path:'/Music' },
        {id: v1(), title: 'Profile', path:'/Settings' },
    ]
}


const sidebarReducer = (state = initialState, action: ActionTypes): InitialStateType   => {

    switch (action.type) {
        default:
            return state

    }



}

export default sidebarReducer;