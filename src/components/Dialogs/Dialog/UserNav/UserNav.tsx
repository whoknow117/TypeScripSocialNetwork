import React from 'react';
import classes from './UserNav.module.scss';
import {DialogsType} from "../../../../types/types";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';

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
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <CallIcon/>
                </div>
                <div className={classes.item}>
                    <VideocamIcon/>
                </div>
                <div className={classes.item}>
                    <PersonAddIcon/>
                </div>
                <div className={classes.item}>
                    <InfoIcon/>
                </div>
            </nav>

        </div>
    )


}

export default UserNav;