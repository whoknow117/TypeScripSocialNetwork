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


const Content: React.FC<ContentType> = ({ addNewPost,updateNewPostText, posts, profilePage}) => {

    let value = profilePage.newPostText


    const changeNewText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Text')
        updateNewPostText(e.currentTarget.value);

    }

    const addPost = () => {
        console.log("Value")
        addNewPost();

    }


    return <div className={classes.content}>

        <div className={classes.contentWrapp}>
            <UserDiscription/>
            <div className={classes.inputWrapper}>
                <textarea value={value} onChange={changeNewText}  ></textarea>

                <button onClick={addPost}>Add</button>
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