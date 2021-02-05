import React from 'react';
import classes from './Content.module.scss';
import {PostsType} from "../../../types/types";
import {ActionTypes} from "../../../types/types";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import UserDiscription from "./UserDiscription/UserDiscription";
import {ProfilePageType} from "../../../types/types";


type ContentType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    posts: Array<PostsType>
}


const Content: React.FC<ContentType> = ({dispatch, posts, profilePage}) => {

    const value = profilePage.newPostText;
    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const changeNewText = () => {
        // updateNewPostText(text);
        dispatch(changeNewTextAC(postMessageRef.current ? postMessageRef.current.value : ""))
    }

    const addPost = () => {
        // addNewPost();
        dispatch(addPostAC(value))
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