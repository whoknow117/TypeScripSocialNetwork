import React from 'react';
import classes from './Profile.module.scss';
import Avatar from "./ProfileInfo/Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Content from "./Content/Content";
import {ActionTypes} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/profileReducer";


export type ProfilePropsType = {
    dispatch:(action: ActionTypes) => void
    profilePage: ProfilePageType

}


const Profile:React.FC<ProfilePropsType> = ({dispatch,  profilePage}) => {

    return <div className={classes.profile}>
        <ProfileInfo/>
        <Content dispatch={dispatch} posts={profilePage.posts}  profilePage={profilePage}/>
    </div>
}

export default Profile;