import React from 'react';
import classes from './Dialog.module.scss';
import {ActionTypes, DialogPageType, MessagesType} from "../../../redux/store";
import {DialogsType} from "../../../redux/store";
import Input from "./Input/Input";
import UserNav from "./UserNav/UserNav";

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

                {props.messages.map(m => m.id === props.user.id ?
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
                                {props.user.message}
                            </div>
                        </div>


                    </div> : "")}

            <Input messages={props.messages} dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
        </div>

    )
}

export default Dialog;
