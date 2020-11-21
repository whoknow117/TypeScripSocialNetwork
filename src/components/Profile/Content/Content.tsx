import React, {ChangeEvent, useState} from 'react';
import classes from './Content.module.scss';
import {ActionTypes, PostsType, ProfilePageType} from "../../../redux/store";
import {v1} from "uuid";
import {addPostAC, changeNewTextAC} from "../../../redux/store";


type ContentType = {
    profilePage: ProfilePageType
    dispatch:(action: ActionTypes) => void
    posts: Array<PostsType>
}


const Content: React.FC<ContentType> = ({dispatch, posts,   profilePage}) => {




    let postMessageRef  = React.createRef<HTMLTextAreaElement>();

    const changeNewText = () => {dispatch(changeNewTextAC(postMessageRef.current ? postMessageRef.current.value : ""))}

    const addPost = () => {dispatch(addPostAC(profilePage.newPostText))}



    return <div className={classes.content}>
        <div className={classes.inputWrapper}>
            <textarea onChange={changeNewText} ref={postMessageRef}></textarea>


            <button onClick={addPost}  >Add</button>
        </div>
        <div className={classes.postWrapper}>
            {posts.map(p => {
               return <div key={p.id}>{p.message}</div>
            })}
        </div>



    </div>
}

export default Content;