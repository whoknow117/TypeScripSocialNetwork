import React from 'react';
import classes from './Dialog.module.scss';
import { DialogPageType, MessagesType} from "../../../types/types";
import {DialogsType} from "../../../types/types";
import Input from "./Input/Input";
import UserNav from "./UserNav/UserNav";
import {ActionTypes} from "../../../types/types";

type PropsType = {

    dialogID: string
    user: DialogsType
    messages: Array<MessagesType>
    dispatch:(action: ActionTypes) => void
    dialogsPage: DialogPageType
}


function Dialog(props: PropsType) {


    return (

        <div className={classes.dialog}>

            <UserNav user={props.user}/>

               <div className={classes.messageWrap}>
                   {props.messages.map(m =>
                       <div className={classes.message}>
                           <div className={classes.image}>
                               <img src={props.user.img} alt="#"/>
                           </div>
                           <div className={classes.content}>
                               <div className={classes.name}>
                                   <h4 className={classes.title}>{props.user.name}</h4>
                                   <span className={classes.time}>21:30</span>
                               </div>
                               <div>
                                   {m.message}
                               </div>
                           </div>


                       </div>  )}
               </div>

            <Input dialogID={props.dialogID} messages={props.messages} dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
        </div>

    )
}

export default Dialog;
