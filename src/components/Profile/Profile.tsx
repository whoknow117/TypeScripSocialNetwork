import React from 'react';
import classes from './Profile.module.scss';
import Avatar from "./ProfileInfo/Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Content from "./Content/Content";
import {ProfilePageType} from "../../redux/store";



export type ProfilePropsType = {
    addPost: (postText: string) => void
    profilePage: ProfilePageType

}


const Profile:React.FC<ProfilePropsType> = ({addPost, profilePage}) => {

    return <div className={classes.profile}>
        <ProfileInfo/>
        <Content posts={profilePage.posts} addPostCallback={addPost} profilePage={profilePage}/>
    </div>
}

export default Profile;