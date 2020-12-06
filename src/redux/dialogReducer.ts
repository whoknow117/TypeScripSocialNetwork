import {ActionTypes, DialogPageType, MessagesType} from "./store";
import {v1} from "uuid";



export type ChangeNewMessageBodyACType  = ReturnType<typeof changeNewMessageTextAC>
export type SendMessageBodyACType = ReturnType<typeof sendMessageAC>



 const dialogReducer = (state: DialogPageType, action: ActionTypes) => {


     if (action.type === 'CHANGE-NEW-MESSAGE-TEXT' ) {
         state.newMessageBody = action.message;

    }
    else if (action.type === 'SEND-MESSAGE') {

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

export const changeNewMessageTextAC = (text: string) => {

    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        message: text
    }   as const
}

export const sendMessageAC = (body: string) => {
    return {
        type: 'SEND-MESSAGE',
        body: body

    }   as const
}


export default dialogReducer;