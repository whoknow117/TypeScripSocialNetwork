import React from 'react';
import classes from './DialogList.module.scss';
import {DialogsType} from "../../../redux/store";
import SingleUserDialogLink from './SingleUserDialogLink/SingleUserDialogLink';


type PropsType = {
    dialogs: Array<DialogsType>

}



const DialogList = (props: PropsType) => {


    return (

        <div className={classes.dialogList}>
            {props.dialogs.map((el,inx) => {
                return <SingleUserDialogLink key={inx} id={el.id} name={el.name} img={el.img} message={el.message}/>
            })}
        </div>

    )
}

export default DialogList;
