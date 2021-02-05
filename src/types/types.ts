import {addPostAC, changeNewTextAC} from "../redux/profileReducer";
import {ChangeNewMessageBodyACType, SendMessageBodyACType} from "../redux/dialogReducer";

export type DialogsType = {
    img: string
    id: string
    name: string
    message: string
}

export type  AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type MessagesType = {

    id: string
    message: string
}

export type DialogPageType = {

    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string

}


export type PostsType = {

    id: string
    message: string
    likesCount: number

}

export type ProfilePageType = {

    posts: Array<PostsType>
    newPostText: string

}

export type ActionTypes = AddPostActionType | ChangeNewTextActionType | ChangeNewMessageBodyACType | SendMessageBodyACType