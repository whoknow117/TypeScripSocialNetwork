
import {

    changeNewMessageTextAC,
    sendMessageAC,

} from "../redux/dialogReducer";
import {RootStateType} from "../redux/redux-store";

export type DialogsType = {
    img: string
    id: string
    name: string
    message: string
}

export type  AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
export type ChangeNewTextActionType  = {

    type: 'CHANGE-NEW-TEXT'
    newText: string


}


export type MessageStateType = {
    [key:string]: Array<MessagesType>
}


export type MessagesType = {

    id: string
    message: string
}

export type DialogPageType = {

    dialogs: Array<DialogsType>
    messages: MessageStateType
    newMessageBody: string

}
export type ChangeNewMessageBodyACType = ReturnType<typeof changeNewMessageTextAC>
export type SendMessageBodyACType = ReturnType<typeof sendMessageAC>

export type PostsType = {

    id: string
    message: string
    likesCount: number

}

export type ProfilePageType = {

    posts: Array<PostsType>
    newPostText: string

}

export type ActionTypes = ChangeNewTextActionType| AddPostActionType  | ChangeNewMessageBodyACType | SendMessageBodyACType



// PROVIDER TYPE


export type ProviderType = {
    store: RootStateType
    children: any
}