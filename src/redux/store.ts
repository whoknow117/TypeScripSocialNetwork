

const ADD_POST = 'ADD-POST';
const ADD_NEW_TEXT = 'ADD-NEW-TEXT';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';





let store = {



    _state: {
        profilePage: {
            posts: [],
            dialogs: [
                {id:1, message: 'hi'},
                {id:2, message: 'asdasd'},
                {id:3, message: 'hiadac'},
                {id:4, message: 'acsdci'},
                {id:5, message: 'asdc'},
            ],
        },
        messagesPage: {
            messages: [
                {id:1, message: 'hi'},
                {id:2, message: 'asdasd'},
                {id:3, message: 'hiadac'},
                {id:4, message: 'acsdci'},
                {id:5, message: 'asdc'},
            ]
        }


    },


}



export default store;