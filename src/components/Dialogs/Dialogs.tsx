import React from 'react';
import classes from './Dialogs.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import Dialog from "./Dialog/Dialog";
import {DialogPageType} from '../../redux/store';


type PropsType = {
    dialogsPage: DialogPageType
}

function Dialogs(props: PropsType) {

    let dialogs = props.dialogsPage.dialogs;
    let messages = props.dialogsPage.messages;

    return (

        <div className={classes.dialogs}>
            <DialogList dialogs={dialogs}/>

            <Dialog dialogs={dialogs} messages={messages}/>


        </div>

    )
}

export default Dialogs;
