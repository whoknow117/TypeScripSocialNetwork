import React from 'react';
import classes from './Dialog.module.scss';
import { DialogPageType, MessagesType} from "../../../types/types";
import {DialogsType} from "../../../types/types";
import Input from "./Input/Input";
import UserNav from "./UserNav/UserNav";
import {ActionTypes} from "../../../types/types";
import InputContainer from "./Input/InputContainer";
import {RootStateType} from "../../../redux/redux-store";

type PropsType = {

    dialogID: string
    user: DialogsType
    messages: Array<MessagesType>
    store: RootStateType

}


function Dialog(props: PropsType) {

    const state = props.store.getState()

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

            <InputContainer dialogID={props.dialogID}  store={props.store}   />
        </div>

    )
}

export default Dialog;
