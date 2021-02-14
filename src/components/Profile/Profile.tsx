import React from 'react';
import classes from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContentContainer from "./Content/ContentContainer";



export type ProfilePropsType = {


}


const Profile: React.FC<ProfilePropsType> = ( ) => {

    return <div className={classes.profile}>
        <ProfileInfo/>
        <ContentContainer  />

    </div>
}

export default Profile;