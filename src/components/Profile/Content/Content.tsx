import React, {ChangeEvent} from 'react';
import classes from './Content.module.scss';
import {PostsType} from "../../../types/types";

import UserDiscription from "./UserDiscription/UserDiscription";
import {ProfilePageType} from "../../../types/types";


type ContentType = {
    profilePage: ProfilePageType
    updateNewPostText: (text: string) => void
    posts: Array<PostsType>
    addNewPost: () => void

}


const Content: React.FC<ContentType> = ({addNewPost, updateNewPostText, posts, profilePage}) => {

    let value = profilePage.newPostText


    const changeNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {

        updateNewPostText(e.currentTarget.value);

    }

    const addPost = () => {

        addNewPost();

    }


    return <div className={classes.content}>

        <div className={classes.contentWrapp}>
            <UserDiscription/>
            <div className={classes.inputWrapper}>
                <textarea className={classes.input}
                    value={value}
                    onChange={changeNewText}>
                </textarea>
                <button className={classes.btn} onClick={addPost}>Post</button>
            </div>
            <div className={classes.postWrapper}>
                {posts.map(p => {
                    return <div key={p.id}>{p.message}</div>
                })}
            </div>

        </div>


    </div>
}

export default Content;