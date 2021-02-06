import React from 'react';
import classes from './Content.module.scss';
import {PostsType} from "../../../types/types";
import {ActionTypes} from "../../../types/types";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import UserDiscription from "./UserDiscription/UserDiscription";
import {ProfilePageType} from "../../../types/types";


type ContentType = {
    profilePage: ProfilePageType
    updateNewPostText: (text: string) => void
    posts: Array<PostsType>
    addNewPost: (value: string) => void
    value: string
}


const Content: React.FC<ContentType> = ({value, addNewPost,updateNewPostText, posts, profilePage}) => {


    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const changeNewText = () => {
        updateNewPostText(postMessageRef.current ? postMessageRef.current.value : "");

    }

    const addPost = () => {
        addNewPost(value);

    }


    return <div className={classes.content}>

        <div className={classes.contentWrapp}>
            <UserDiscription/>
            <div className={classes.inputWrapper}>
                <textarea value={value} onChange={changeNewText} ref={postMessageRef}></textarea>

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