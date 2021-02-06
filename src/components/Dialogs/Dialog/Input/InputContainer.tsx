import React, {ChangeEvent} from 'react';
import classes from './Input.module.scss';
import AddIcon from '@material-ui/icons/Add';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GifIcon from '@material-ui/icons/Gif';
import SendIcon from '@material-ui/icons/Send';
import {  DialogPageType, DialogsType, MessagesType} from "../../../../types/types";
import {changeNewMessageTextAC, sendMessageAC} from "../../../../redux/dialogReducer";
import {ActionTypes} from "../../../../types/types";
import Input from "./Input";


type InputPropsType = {
    dispatch:(action: ActionTypes) => void
    dialogsPage: DialogPageType
    messages: Array<MessagesType>
    dialogID: string

}

const InputContainer: React.FC<InputPropsType> = ({dialogID,messages,dialogsPage,dispatch}) => {

    const value = dialogsPage.newMessageBody;

    const val = React.createRef<HTMLInputElement>()

    const changeTextCallBack = (text: string) => {dispatch(changeNewMessageTextAC(text))}

    const sendMessageCallback = () => {

        dispatch(sendMessageAC(dialogsPage.newMessageBody,dialogID))}


    return (
        <Input sendMessage={sendMessageCallback} changeText={changeTextCallBack} dialogsPage={dialogsPage} messages={messages} />
    )
}

export default InputContainer;