import React, {ChangeEvent, useState} from 'react';
import classes from './Content.module.scss';
import {ActionTypes, PostsType, ProfilePageType} from "../../../redux/store";
import {v1} from "uuid";
import {addPostAC, changeNewTextAC} from "../../../redux/store";
import SupperInput from "../../common/SupperInput/SupperInput";
import UserDiscription from "./UserDiscription/UserDiscription";


type ContentType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    posts: Array<PostsType>
}


const Content: React.FC<ContentType> = ({dispatch, posts, profilePage}) => {

    const value = profilePage.newPostText;
    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const changeNewText = () => {
        dispatch(changeNewTextAC(postMessageRef.current ? postMessageRef.current.value : ""))
    }

    const addPost = () => {
        dispatch(addPostAC(profilePage.newPostText))
    }


    return <div className={classes.content}>

        <div className={classes.contentWrapp}>
            <UserDiscription/>
            <div className={classes.inputWrapper}>
                {/*<textarea value={value} onChange={changeNewText} ref={postMessageRef}></textarea>*/}


                {/*<button onClick={addPost}>Add</button>*/}
            </div>
            <div className={classes.postWrapper}>
                {/*{posts.map(p => {*/}
                {/*    return <div key={p.id}>{p.message}</div>*/}
                {/*})}*/}
            </div>

        </div>


    </div>
}

export default Content;