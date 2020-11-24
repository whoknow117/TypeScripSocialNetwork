import React from 'react';
import classes from './Dialog.module.scss';
import {MessagesType} from "../../../redux/store";
import {DialogsType} from "../../../redux/store";
import Input from "./Input/Input";
import UserNav from "./UserNav/UserNav";

type PropsType = {

    dialogID: string
    user: DialogsType
    messages: Array<MessagesType>

}


function Dialog(props: PropsType) {

    debugger
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

            <Input/>
        </div>

    )
}

export default Dialog;
