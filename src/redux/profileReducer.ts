import {
    ActionTypes,
    MessagesType,
    PostsType,
    ProfilePageType,
    StateType,
    ChangeNewTextActionType,
    AddPostActionType
} from "./store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';




  const profileReducer = (state:ProfilePageType, action: ActionTypes) => {
    if (action.type ===  ADD_POST ) {

        const newPost: PostsType = {
            id: v1(),
            message: action.postText,
            likesCount: 0,

        }
         state.posts.push(newPost)
         state.newPostText = "";

    } else if (action.type === CHANGE_NEW_TEXT) {

         state.newPostText = action.newText



    }
    return state;
}

export default profileReducer;
