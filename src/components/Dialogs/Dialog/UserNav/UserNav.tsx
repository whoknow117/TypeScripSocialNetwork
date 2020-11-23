import React from 'react';
import classes from './UserNav.module.scss';
import {DialogsType} from "../../../../redux/store";


type UserNavPropsType ={
    user: DialogsType
}


function UserNav(props: UserNavPropsType) {
    return (
        <div className={classes.userNav}>
            <div className={classes.userInfo}>
                <div className={classes.image}>
                    <img src={props.user.img} alt="#"/>
                </div>
                <div className={classes.content}>
                    <h4 className={classes.title}>{props.user.name}</h4>
                    <span className={classes.time}>В сети: сегодня в 12:30</span>
                </div>
            </div>
            <div></div>

        </div>
    )


}

export default UserNav;