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
    dispatch:(action: ActionTypes) => void
    dialogsPage: DialogPageType
    messages: Array<MessagesType>
    dialogID: string
}

const Input: React.FC<InputPropsType> = ({dialogID,messages,dialogsPage,dispatch}) => {

    const value = dialogsPage.newMessageBody;

    const val = React.createRef<HTMLInputElement>()

    const changeTextCallBack = (e:ChangeEvent<HTMLInputElement>) => {dispatch(changeNewMessageTextAC(e.currentTarget.value))}

    const sendMessageCallback = () => {
        console.log(dialogsPage.newMessageBody)
        dispatch(sendMessageAC(dialogsPage.newMessageBody,dialogID))}


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