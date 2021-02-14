import React from 'react';
import classes from './Dialogs.module.scss';
import {  Route} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import Dialog from "./Dialog/Dialog";

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
                    <Route key={d.id} path={path} render={() => <Dialog
                        dialogID={d.id}
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
