import React from 'react';
import classes from './SingleUserDialogLink.module.scss';
import { NavLink } from "react-router-dom";

type PropsType = {
    id: string
    name: string
    message: string
    img: string

}




const SingleUserDialogLink = (props:PropsType ) => {

    let path:string = '/dialogs/' + props.id;
    return (

        <div className={classes.singleUser}>
            <NavLink className={classes.link} to={path}>
            <div className={classes.img}>
                <img src={props.img} alt="#"/>
            </div>
             <div className={classes.content}>
                 <div className={classes.name}>{props.name}</div>
                 <div className={classes.message}>{props.message}</div>

             </div>
            </NavLink>
        </div>

    )
}

export default SingleUserDialogLink;
