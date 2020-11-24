import React from 'react';
import classes from './Input.module.scss';
import AddIcon from '@material-ui/icons/Add';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import GifIcon from '@material-ui/icons/Gif';
import SendIcon from '@material-ui/icons/Send';

type InputPropsType = {}

const Input: React.FC<InputPropsType> = () => {

    return <div className={classes.wrapper}>
        <div className={classes.buttons}>
            <div className={classes.iconBtn}>
                <AddIcon/>
            </div>
            <div className={classes.iconBtn}>
                <SentimentVerySatisfiedIcon/>
            </div>
            <div className={classes.iconBtn}>
                <GifIcon/>
            </div>
        </div>
        <div className={classes.inputBlock}>
            <input type="text"/>
            <button className={classes.btn}>
                <SendIcon/>
            </button>
        </div>
    </div>
}

export default Input;