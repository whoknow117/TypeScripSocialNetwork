import React from 'react';
import classes from './Dialog.module.scss';
import {MessagesType} from "../../../redux/store";
import {DialogsType} from "../../../redux/store";
import Input from "./Input/Input";
import UserNav from "./UserNav/UserNav";

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>


}


function Dialog (props: PropsType) {

    debugger
    return (

        <div className={classes.dialog}>
            <UserNav/>
            <div className={classes.messages}>
            </div>
            <Input/>
        </div>

    )
}

export default Dialog;
