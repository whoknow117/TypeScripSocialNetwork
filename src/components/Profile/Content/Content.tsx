import React, {ChangeEvent, useState} from 'react';
import classes from './Content.module.scss';
import {PostsType, ProfilePageType} from "../../../redux/store";
import {v1} from "uuid";
import {Simulate} from "react-dom/test-utils";
 


type ContentType = {
    profilePage: ProfilePageType
}


const Content: React.FC<ContentType> = ({profilePage}) => {


    const [text, setText] = useState<string>('')
    const [posts, setPost] = useState<Array<PostsType>>(profilePage.posts)

    const addPost = (message: string) => {

        const post:PostsType = {
            id: v1(),
            message: message,
            likesCount: 0

        }
        setPost([post,...posts]);
    }

    const addNewPost = () => {
        let trimmedText = text.trim();
        if (trimmedText !== "") {
            addPost(trimmedText)
            setText("")
        }

    }
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }


    return <div className={classes.content}>
        <div className={classes.inputWrapper}>
            <input
                value={text}
                onChange={onChangeText}
                type="text"/>
            <button
            onClick={addNewPost}>Add</button>
        </div>
        <div className={classes.postWrapper}>{text}</div>
        {posts.map( p => {
            return <div>{p.message}</div>
        })}
    </div>
}

export default Content;