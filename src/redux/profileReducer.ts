
import {v1} from "uuid";
import {ActionTypes, PostsType, ProfilePageType} from "../types/types";







let initialState:ProfilePageType = {
        posts: [
            {id: v1(), message: 'hi', likesCount: 12},
            {id: v1(), message: 'asdasd', likesCount: 12},
            {id: v1(), message: 'hiadac', likesCount: 12},
            {id: v1(), message: 'acsdci', likesCount: 12},
        ],
        newPostText: ''

    }


export const addPostAC = (postText: string) => {

    return {
        type: 'ADD-POST',
        postText: postText

    } as const
}

export const changeNewTextAC = (newText: string) => {

    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText

    } as const
}



  const profileReducer = (state:ProfilePageType = initialState , action: ActionTypes) => {
    switch (action.type){
        case "ADD-POST": {
            let copyState = {...state}

            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likesCount: 0,

            }
            copyState.posts.push(newPost)
            copyState.newPostText = "";
        }
        case "CHANGE-NEW-TEXT":{

        }
        default: return state;
    }
    // if (action.type ===  'ADD-POST' ) {
    //
    //     const newPost: PostsType = {
    //         id: v1(),
    //         message: action.postText,
    //         likesCount: 0,
    //
    //     }
    //      state.posts.push(newPost)
    //      state.newPostText = "";
    //
    // } else if (action.type === 'CHANGE-NEW-TEXT') {
    //
    //      state.newPostText = action.newText
    //
    //
    //
    // }
    // return state;
}

export default profileReducer;
