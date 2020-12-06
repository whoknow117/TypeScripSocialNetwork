import {
    ActionTypes,





} from "./redux-store";
import {v1} from "uuid";

export type  AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type PostsType = {

    id: string
    message: string
    likesCount: number

}

export type ProfilePageType = {

    posts: Array<PostsType>
    newPostText: string

}

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
    if (action.type ===  'ADD-POST' ) {

        const newPost: PostsType = {
            id: v1(),
            message: action.postText,
            likesCount: 0,

        }
         state.posts.push(newPost)
         state.newPostText = "";

    } else if (action.type === 'CHANGE-NEW-TEXT') {

         state.newPostText = action.newText



    }
    return state;
}

export default profileReducer;
