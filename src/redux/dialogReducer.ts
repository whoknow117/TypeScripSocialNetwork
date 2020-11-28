import {ActionTypes, DialogPageType, MessagesType} from "./store";
import {v1} from "uuid";

 const dialogReducer = (state: DialogPageType, action: ActionTypes) => {
    const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
    const SEND_MESSAGE = 'SEND-MESSAGE';

     if (action.type === CHANGE_NEW_MESSAGE_TEXT ) {
         state.newMessageBody = action.message;

    }
    else if (action.type === SEND_MESSAGE) {

        let body = state.newMessageBody;
        const newMessage: MessagesType = {
            id: v1(),
            message: body,
        }
       state.messages.push(newMessage)
        state.newMessageBody = ""
    }

    return state;
}

export default dialogReducer;