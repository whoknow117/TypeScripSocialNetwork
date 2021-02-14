import React from 'react';
import classes from './Dialog.module.scss';
import {  MessagesType} from "../../../types/types";
import {DialogsType} from "../../../types/types";

import UserNav from "./UserNav/UserNav";

import InputContainer from "./Input/InputContainer";
import {RootStateType} from "../../../redux/redux-store";

type PropsType = {

    dialogID: string
    user: DialogsType
    messages: Array<MessagesType>
    store: RootStateType

}


function Dialog(props: PropsType) {



    return (

        <div className={classes.dialog}>

            <UserNav user={props.user}/>


            <InputContainer dialogID={props.dialogID} img={props.user.img} name={props.user.name} messages={props.messages}  />
        </div>

    )
}

export default Dialog;
