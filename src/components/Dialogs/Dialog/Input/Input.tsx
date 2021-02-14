import React, {ChangeEvent} from 'react';
import classes from './Input.module.scss';
import AddIcon from '@material-ui/icons/Add';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GifIcon from '@material-ui/icons/Gif';
import SendIcon from '@material-ui/icons/Send';
import {DialogPageType, MessagesType} from "../../../../types/types";


type InputPropsType = {

    dialogsPage: DialogPageType
    messages:Array<MessagesType>
    dialogID: string
    changeText: (text: string) => void
    sendMessage: (dialogID: string) => void
}

const Input: React.FC<InputPropsType> = ({messages,dialogID, changeText, dialogsPage, sendMessage}) => {

    const value = dialogsPage.newMessageBody;


    const changeTextCallBack = (e: ChangeEvent<HTMLInputElement>) => {

        changeText(e.currentTarget.value)
    }

    const sendMessageCallback = () => {
        console.log(dialogID)
        sendMessage(dialogID)
    }


    return <div>
        {messages.map(m => {
            return <div>{m.message}</div>
        })}
        <div className={classes.wrapper}>
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
                <input value={value} onChange={changeTextCallBack} type="text"/>
                <button onClick={sendMessageCallback} className={classes.btn}>
                    <SendIcon/>
                </button>
            </div>
        </div>
    </div>
}

export default Input;