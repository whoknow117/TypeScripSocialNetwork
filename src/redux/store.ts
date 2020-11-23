import {v1} from "uuid";
import {act} from "react-dom/test-utils";




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
    newPostText: string

}
export type DialogPageType = {

    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string

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
    _rerender: () => void
    dispatch: (action: any) => void

}
export type AddPostActionType = {
    type: string
    postText: string

}
export type ChangeNewTextActionType = {
    type: string
    newText: string

}
export type ActionTypes = AddPostActionType | ChangeNewTextActionType


export const addPostAC = (postText: string) => {

    return {
        type: 'ADD-POST',
        postText: postText

    }
}

export const changeNewTextAC = (newText: string) => {

    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText

    }
}
const userMessageID1:string = v1();
const userMessageID2:string = v1();
const userMessageID3:string= v1();
const userMessageID4:string = v1();
const userMessageID5:string = v1();

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store: RootStateType = {


    getState() {
        return this._state
    },
    _rerender() {
        console.log('start')
    },
    subscriber(observer: () => void) {
        this._rerender = observer
    },
    dispatch(action) {
        if (action.type ===  ADD_POST ) {

            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likesCount: 0,

            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._rerender()
        } else if (action.type === 'CHANGE-NEW-TEXT') {

            this._state.profilePage.newPostText = action.newText
            this._rerender()


        }
    },


    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'hi', likesCount: 12},
                {id: v1(), message: 'asdasd', likesCount: 12},
                {id: v1(), message: 'hiadac', likesCount: 12},
                {id: v1(), message: 'acsdci', likesCount: 12},
            ],
            newPostText: ''

        },
        dialogsPage: {

            dialogs: [
                {
                    id: userMessageID1,
                    name: 'Dimas',
                    message: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах.',
                    img: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                },
                {
                    id: userMessageID2,
                    name: 'Andre',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    img: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: userMessageID3,
                    name: 'Jana',
                    message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                {
                    id: userMessageID4,
                    name: 'Ludovic',
                    message: 'Lorem Ipsum начал как омлет, бессмысленные Латинской происходит от 1-го века до н.э. текст Цицерона De Finibus Bonorum et Malorum.',
                    img: 'https://i1.wp.com/www.alphr.com/wp-content/uploads/2020/05/Zoom-How-to-Set-Profile-Picture.jpg?resize=1200%2C666&ssl=1'
                },
                {
                    id: userMessageID5,
                    name: 'Sirena',
                    message: 'Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла») ',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgXGSWzxNteVrILpdCKpmTz_39LItE3ZFDHA&usqp=CAU'
                },
            ],
            messages: [
                {id: userMessageID1, message: 'hello den how are you?'},
                {id: userMessageID2, message: 'asdasd'},
                {id: userMessageID3, message: 'hiadac'},
                {id: userMessageID4, message: 'acsdci'},
                {id: userMessageID5, message: 'asdc'},
            ],
            newMessageBody: '',

        },
        sidebar: {},


    },


}


export default store;