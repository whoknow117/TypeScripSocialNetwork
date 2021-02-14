import {v1} from "uuid";
import {ActionTypes} from "../types/types";

export type SidebarType = {
    id: string
    title: string
    path: string
}

export type NavBarType = Array<SidebarType>



let initialState:NavBarType  = [
    {id: v1(), title:'Profile', path:'/profile' },
    {id: v1(), title: 'Messages', path:'/dialogs' },
    {id: v1(), title: 'Users', path:'/users' },
    {id: v1(), title: 'News', path:'/News' },
    {id: v1(), title: 'Music', path:'/Music' },
    {id: v1(), title: 'Profile', path:'/Settings' },
]


const sidebarReducer = (state = initialState, action: ActionTypes): NavBarType   => {

    switch (action.type) {
        default:
            return state

    }



}

export default sidebarReducer;