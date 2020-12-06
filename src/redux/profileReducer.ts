import {
    ActionTypes,

    PostsType,
    ProfilePageType,



} from "./store";
import {v1} from "uuid";

export type  AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>




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



  const profileReducer = (state:ProfilePageType, action: ActionTypes) => {
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
