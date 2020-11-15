import React, {ChangeEvent, useState} from 'react';
import classes from './Content.module.scss';
import {PostsType, ProfilePageType} from "../../../redux/store";
import {v1} from "uuid";



type ContentType = {
    profilePage: ProfilePageType
    addPostCallback: (postText: string ) => void
    posts: Array<PostsType>
}


const Content: React.FC<ContentType> = ({posts,addPostCallback, profilePage}) => {


    // const [text, setText] = useState<string>('')
    // const [posts, setPost] = useState<Array<PostsType>>(profilePage.posts)
    //
    // const addPost = (message: string) => {
    //
    //     const post:PostsType = {
    //         id: v1(),
    //         message: message,
    //         likesCount: 0
    //
    //     }
    //     setPost([post,...posts]);
    // }
    //
    // const addNewPost = () => {
    //     let trimmedText = text.trim();
    //     if (trimmedText !== "") {
    //         addPost(trimmedText)
    //         setText("")
    //     }
    //
    // }
    // const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    //     setText(e.currentTarget.value)
    // }


    let postMessageRef  = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(postMessageRef.current){
            addPostCallback(postMessageRef.current.value)
        }
    }



    return <div className={classes.content}>
        <div className={classes.inputWrapper}>
            <textarea ref={postMessageRef}></textarea>


            <button
                onClick={addPost}
            >Add</button>
        </div>
        <div className={classes.postWrapper}>
            {posts.map(p => {
               return <div key={p.id}>{p.message}</div>
            })}
        </div>



    </div>
}

export default Content;