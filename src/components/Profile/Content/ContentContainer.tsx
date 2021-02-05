import React from 'react';
import classes from './ContentContainer.module.scss.module.scss';
import {PostsType} from "../../../types/types";
import {ActionTypes} from "../../../types/types";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import UserDiscription from "./UserDiscription/UserDiscription";
import {ProfilePageType} from "../../../types/types";


type ContentContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    posts: Array<PostsType>
}


const ContentContainer: React.FC<ContentContainerType> = ({dispatch, posts, profilePage}) => {

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

export default ContentContainer;