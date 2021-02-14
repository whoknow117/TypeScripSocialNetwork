import React from 'react';
import classes from './Users.module.scss';
import {UsersType} from "../../types/types";

export type UsersPropsType = {
    users: Array<UsersType>
}

const Users: React.FC<UsersPropsType> = ({users}) => {
    debugger;
    return <div className={classes.users}>
        {users.map((us, index) => <div key={index} className={classes.user}>
            <div className={classes.avatar}>
                <div className={classes.image}>
                    <img src={us.img} alt=""/>
                </div>
                {us.isFollow ? <div className={classes.follow}>unfollow</div> : <div className={classes.follow}>follow</div>}
            </div>
            <div className={classes.userContent}>
                <div className={classes.userNameWrapper}>
                    <div className={classes.fullName}>{us.fullName}</div>
                    <div className={classes.status}>{us.status}</div>
                </div>
                <div className={classes.location}>
                    <span className={classes.city}>{us.location.city}</span>
                    <span className={classes.country}>{us.location.country}</span>
                </div>
            </div>
        </div>)}
    </div>
}

export default Users;


