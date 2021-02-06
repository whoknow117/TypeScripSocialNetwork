import React from 'react';
import classes from './ContentContainer.module.scss.module.scss';
import {PostsType} from "../../../types/types";
import {ActionTypes} from "../../../types/types";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import UserDiscription from "./UserDiscription/UserDiscription";
import {ProfilePageType} from "../../../types/types";
import Content from "./Content";
import {RootStateType} from "../../../redux/redux-store";


type ContentContainerType = {
   store:RootStateType
}


const ContentContainer: React.FC<ContentContainerType> = ({store}) => {

    const state = store.getState();
    const value =  state.profilePage.newPostText;
    const profilePage = state.profilePage;
    const dispatch = store.dispatch;
    const posts = state.profilePage.posts
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