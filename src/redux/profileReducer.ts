
import {v1} from "uuid";
import {ActionTypes, AddPostActionType, ChangeNewTextActionType, PostsType, ProfilePageType} from "../types/types";








let initialState:ProfilePageType = {
        posts: [
            {id: v1(), message: 'hi', likesCount: 12},
            {id: v1(), message: 'asdasd', likesCount: 12},
            {id: v1(), message: 'hiadac', likesCount: 12},
            {id: v1(), message: 'acsdci', likesCount: 12},
        ],
        newPostText: ''

    }


export const addPostAC = ():AddPostActionType => {

    return {
        type: 'ADD-POST',


    } as const
}

export const changeNewTextAC = (newText: string ):ChangeNewTextActionType => {

    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText,


    } as const
}



  const profileReducer = (state:ProfilePageType = initialState , action: ActionTypes):ProfilePageType => {
    switch (action.type){
        case "CHANGE-NEW-TEXT": {
            let copyState = {...state}
            copyState.newPostText = action.newText
            return copyState;
        }
        case "ADD-POST": {
            let copyState = {...state}
            const newPost: PostsType = {
                id: v1(),
                message: copyState.newPostText,
                likesCount: 0,

            }
            copyState.posts.push(newPost)
            copyState.newPostText = "";
            return copyState;
        }


        default: return state;
    }

}

export default profileReducer;
