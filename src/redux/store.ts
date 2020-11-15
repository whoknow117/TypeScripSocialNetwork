
import {v1} from "uuid";
const ADD_POST = 'ADD-POST';
const ADD_NEW_TEXT = 'ADD-NEW-TEXT';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


export type DialogsType = {
    img: string
    id: string
    name: string
    message: string
}

export type MessagesType = {

    id: string
    message: string
}

export type PostsType = {

    id: string
    message: string
    likesCount: number

}

export type ProfilePageType = {

    posts: Array<PostsType>

}
export type DialogPageType = {

    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string

}


export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}
export type RootStateType = {
    getState: () => StateType
    _state: StateType
    subscriber: (observer: () => void) => void
    _rerender:() => void
}

let store: RootStateType = {

    getState(){
        return this._state
    },
    subscriber(observer) {
      this._rerender = observer
    },
    _rerender() {
        console.log('asd')
    },

    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'hi', likesCount: 12},
                {id: v1(), message: 'asdasd', likesCount: 12},
                {id: v1(), message: 'hiadac', likesCount: 12},
                {id: v1(), message: 'acsdci', likesCount: 12},]

        },
        dialogsPage: {
            dialogs: [
                {
                    id: v1(),
                    name: 'Dimas',
                    message: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.',
                    img: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                },
                {
                    id: v1(),
                    name: 'Andre',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    img: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: v1(),
                    name: 'Jana',
                    message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                {
                    id: v1(),
                    name: 'Ludovic',
                    message: 'Lorem Ipsum начал как омлет, бессмысленные Латинской происходит от 1-го века до н.э. текст Цицерона De Finibus Bonorum et Malorum.',
                    img: 'https://i1.wp.com/www.alphr.com/wp-content/uploads/2020/05/Zoom-How-to-Set-Profile-Picture.jpg?resize=1200%2C666&ssl=1'
                },
                {
                    id: v1(),
                    name: 'Sirena',
                    message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgXGSWzxNteVrILpdCKpmTz_39LItE3ZFDHA&usqp=CAU'
                },
            ],
            messages: [
                {id: v1(), message: 'hello den how are you?'},
                {id: v1(), message: 'asdasd'},
                {id: v1(), message: 'hiadac'},
                {id: v1(), message: 'acsdci'},
                {id: v1(), message: 'asdc'},
            ],
            newMessage: '',

        },
        sidebar: {},


    }



}

export const addPost = (postText: string) => {

    const newPost: PostsType = {
        id: v1(),
        message: postText,
        likesCount: 0,

    }

    store._state.profilePage.posts.push(newPost)
}

export default store;