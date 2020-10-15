import React from 'react';
import classes from './Dialogs.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import Dialog from "./Dialog/Dialog";

type PropsType = {

    state: any
}

const Dialogs = (props: any) => {


    return (

        <div className={classes.wrapper}>

            {/*{props.state.users.map( (el) => {*/}
            {/*    let path = '/dialog/' + el.id;*/}
            {/*    return (*/}
            {/*        <Route path={path} render={() => <Dialog*/}


            {/*            state={props.state}*/}


            {/*        />}/>*/}
            {/*    )*/}
            {/*})}*/}


        </div>

    )
}

export default Dialogs;
