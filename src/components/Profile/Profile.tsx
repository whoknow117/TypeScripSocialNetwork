import React from 'react';
import classes from './Profile.module.scss';
import Avatar from "./ProfileInfo/Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Content from "./Content/Content";
import {ProfilePageType} from "../../redux/store";



export type ProfilePropsType = {

    profilePage: ProfilePageType
}


const Profile:React.FC<ProfilePropsType> = ({profilePage}) => {

    return <div className={classes.profile}>
        <ProfileInfo/>
        <Content profilePage={profilePage}/>
    </div>
}

export default Profile;