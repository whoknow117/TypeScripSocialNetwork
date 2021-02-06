import React from 'react';
import classes from './ContentContainer.module.scss.module.scss';
import {PostsType} from "../../../types/types";
import {ActionTypes} from "../../../types/types";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import UserDiscription from "./UserDiscription/UserDiscription";
import {ProfilePageType} from "../../../types/types";
import Content from "./Content";


type ContentContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    posts: Array<PostsType>
}


const ContentContainer: React.FC<ContentContainerType> = ({dispatch, posts, profilePage}) => {

    const value = profilePage.newPostText;
    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const changeNewText = (text:string) => {
        console.log(profilePage.newPostText)
        dispatch(changeNewTextAC( text))
    }

    const addPost = () => {
        dispatch(addPostAC(profilePage.newPostText))
    }


    return  (
        <Content value={value} addNewPost={addPost} updateNewPostText={changeNewText} profilePage={profilePage} posts={posts}/>
    )
}

export default ContentContainer;