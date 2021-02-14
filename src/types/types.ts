import {

    changeNewMessageTextAC,
    sendMessageAC,

} from "../redux/dialogReducer";

export type DialogsType = {
    img: string
    id: string
    name: string
    message: string
}

export type  AddPostActionType = {
    type: 'ADD-POST'

}
export type ChangeNewTextActionType = {

    type: 'CHANGE-NEW-TEXT'
    newText: string


}


export type MessageStateType = {
    [key: string]: Array<MessagesType>
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
export type UsersPageType = {
    users: Array<UsersType>
}

export type FollowActionType = {
    type: "FOLLOW"
    isFollow: boolean
}

export type UnFollowActionType = {
    type: "UNFOLLOW"
    isFollow: boolean
}

export type ActionTypes =
    ChangeNewTextActionType
    | AddPostActionType
    | ChangeNewMessageBodyACType
    | SendMessageBodyACType
    | UnFollowActionType
    | FollowActionType





export type UsersType = {
    id: string
    img: string
    fullName: string
    isFollow: boolean
    status: string
    location:LocationType

}

export type LocationType = {
    city: string
    country: string
}