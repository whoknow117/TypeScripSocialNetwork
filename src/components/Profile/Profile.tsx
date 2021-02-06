import React from 'react';
import classes from './Profile.module.scss';
import Avatar from "./ProfileInfo/Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Content from "./Content/Content";
import {ActionTypes} from "../../types/types";
import {ProfilePageType} from "../../types/types";
import ContentContainer from "./Content/ContentContainer";


export type ProfilePropsType = {
    dispatch:(action: ActionTypes) => void
    profilePage: ProfilePageType

}


const Profile:React.FC<ProfilePropsType> = ({dispatch,  profilePage}) => {

    return <div className={classes.profile}>
        <ProfileInfo/>
        <ContentContainer  profilePage={profilePage} dispatch={dispatch} posts={profilePage.posts}/>
        {/*<Content dispatch={dispatch} posts={profilePage.posts}  profilePage={profilePage}/>*/}
    </div>
}

export default Profile;