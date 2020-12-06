import React from 'react';
import classes from './Dialogs.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import Dialog from "./Dialog/Dialog";
import {ActionTypes, DialogPageType, MessagesType} from '../../redux/store';


type PropsType = {
    dialogsPage: DialogPageType
    dispatch:(action: ActionTypes) => void

}

function Dialogs(props: PropsType) {

    let dialogs = props.dialogsPage.dialogs;
    let messages = props.dialogsPage.messages;

    return (

        <div className={classes.dialogs}>
            <DialogList dialogs={dialogs}/>

            {dialogs.map(d=>{
                let path = '/dialogs/' + d.id;
                return (
                    <Route path={path} render={() => <Dialog
                        dialogID={d.id}
                        key={d.id}
                        user={d}
                        dialogsPage={props.dialogsPage}
                        messages={messages}
                        dispatch={props.dispatch}
                    />}/>
                )
            })}


        </div>

    )
}

export default Dialogs;