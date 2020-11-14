import React, {useState} from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from "./Avatar/Avatar";
import FriendsList from "./FriendsList/FriendsList";

type ProfileInfoType = {}

const ProfileInfo: React.FC<ProfileInfoType> = () => {


    return <div className={classes.info}>
        <Avatar/>
        <h3 className={classes.name}>Sarah May</h3>
        <FriendsList/>
        <FriendsList/>
        <div></div>
    </div>
}


export default ProfileInfo;