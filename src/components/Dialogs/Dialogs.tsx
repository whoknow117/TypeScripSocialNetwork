import React from 'react';
import classes from './Dialogs.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import Dialog from "./Dialog/Dialog";
import {  DialogPageType, MessagesType} from '../../types/types';
import {ActionTypes} from "../../types/types";
import {RootStateType} from "../../redux/redux-store";


type PropsType = {
    store: RootStateType

}

function Dialogs(props: PropsType) {

    const state = props.store.getState();

    let dialogs = state.dialogsPage.dialogs;
    let messages = state.dialogsPage.messages;

    return (

        <div className={classes.dialogs}>
            <DialogList dialogs={dialogs}/>

            {dialogs.map(d=>{
                let path = '/dialogs/' + d.id;

                let data =  messages[d.id]
                return (
                    <Route path={path} render={() => <Dialog
                        dialogID={d.id}
                        key={d.id}
                        user={d}
                        store={props.store}
                        messages={data}

                    />}/>
                )
            })}


        </div>

    )
}

export default Dialogs;
