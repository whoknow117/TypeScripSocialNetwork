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
import {RootStateType} from "../../../../redux/redux-store";


type InputPropsType = {
    store: RootStateType
    dialogID: string

}

const InputContainer: React.FC<InputPropsType> = ({dialogID,store}) => {

    const state = store.getState()
    const dispatch = store.dispatch;
    const dialogsPage = state.dialogsPage;
    const messages = state.dialogsPage.dialogs

    const value = state.dialogsPage.newMessageBody;

    const val = React.createRef<HTMLInputElement>()

    const changeTextCallBack = (text: string) => {dispatch(changeNewMessageTextAC(text))}

    const sendMessageCallback = () => {

        dispatch(sendMessageAC(dialogsPage.newMessageBody,dialogID))}


    return (
        <Input sendMessage={sendMessageCallback} changeText={changeTextCallBack} dialogsPage={dialogsPage}   />
    )
}

export default InputContainer;