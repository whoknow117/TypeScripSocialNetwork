import React, {ChangeEvent} from 'react';
import classes from './Input.module.scss';
import AddIcon from '@material-ui/icons/Add';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GifIcon from '@material-ui/icons/Gif';
import SendIcon from '@material-ui/icons/Send';
import {  DialogPageType, DialogsType, MessagesType} from "../../../../types/types";
import {changeNewMessageTextAC, sendMessageAC} from "../../../../redux/dialogReducer";
import {ActionTypes} from "../../../../types/types";


type InputPropsType = {

    dialogsPage: DialogPageType


    changeText: (text: string) => void
    sendMessage: () => void
}

const Input: React.FC<InputPropsType> = ({sendMessage,changeText, dialogsPage}) => {

    const value = dialogsPage.newMessageBody;

    const val = React.createRef<HTMLInputElement>()

    const changeTextCallBack = (e:ChangeEvent<HTMLInputElement>) => {changeText(e.currentTarget.value)}

    const sendMessageCallback = () => {
        sendMessage()}


    return <div className={classes.wrapper}>
        <div className={classes.buttons}>
            <div className={classes.iconBtn}>
                <AddIcon/>
            </div>
            <div className={classes.iconBtn}>
                <SentimentVerySatisfiedIcon/>
            </div>
            <div className={classes.iconBtn}>
                <GifIcon/>
            </div>
        </div>
        <div className={classes.inputBlock}>
            <input  value={ value } onChange={changeTextCallBack}   type="text"/>
            <button onClick={sendMessageCallback} className={classes.btn}>
                <SendIcon/>
            </button>
        </div>
    </div>
}

export default Input;