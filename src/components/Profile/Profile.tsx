import React from 'react';
import classes from './Profile.module.scss';
import Avatar from "./ProfileInfo/Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Content from "./Content/Content";
import {ActionTypes} from "../../types/types";
import {ProfilePageType} from "../../types/types";
import ContentContainer from "./Content/ContentContainer";
import {RootStateType} from "../../redux/redux-store";


export type ProfilePropsType = {
    store: RootStateType

}


const Profile: React.FC<ProfilePropsType> = ({store}) => {

    return <div className={classes.profile}>
        <ProfileInfo/>
        <ContentContainer  />

    </div>
}

export default Profile;