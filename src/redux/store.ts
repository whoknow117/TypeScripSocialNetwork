const ADD_POST = 'ADD-POST';
const ADD_NEW_TEXT = 'ADD-NEW-TEXT';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


export type DialogsType = {
    img: string
    id: number
    name: string
    message: string
}

export type MessagesType = {

    id: number
    message: string
}

export type PostsType = {

    id: number
    message: string
    likesCount: number

}

export type ProfilePageType = {

    posts: Array<PostsType>

}
export type DialogPageType = {

    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}


export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}
export type RootStateType = {
    _state: StateType
}

let store: RootStateType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'asdasd', likesCount: 12},
                {id: 3, message: 'hiadac', likesCount: 12},
                {id: 4, message: 'acsdci', likesCount: 12},]

        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimas',
                    message: 'asdasd',
                    img: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                },
                {
                    id: 2,
                    name: 'Andre',
                    message: 'asdasd',
                    img: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: 3,
                    name: 'Jana',
                    message: 'asdasd',
                    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                {
                    id: 4,
                    name: 'Ludovic',
                    message: 'asdasd',
                    img: 'https://i1.wp.com/www.alphr.com/wp-content/uploads/2020/05/Zoom-How-to-Set-Profile-Picture.jpg?resize=1200%2C666&ssl=1'
                },
                {
                    id: 5,
                    name: 'Sirena',
                    message: 'asdasd ',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgXGSWzxNteVrILpdCKpmTz_39LItE3ZFDHA&usqp=CAU'
                },
            ],
            messages: [
                {id: 1, message: 'hello den how are you?'},
                {id: 2, message: 'asdasd'},
                {id: 3, message: 'hiadac'},
                {id: 4, message: 'acsdci'},
                {id: 5, message: 'asdc'},
            ],

        },
        sidebar: {},


    }

}


export default store;