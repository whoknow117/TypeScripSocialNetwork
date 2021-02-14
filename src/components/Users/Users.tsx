import React from 'react';
import classes from './Users.module.scss';
import {UsersType} from "../../types/types";

export type UsersPropsType = {
        users: Array<UsersType>
}

const Users:React.FC<UsersPropsType> = ({users}) => {
        debugger;
        return  <div>
                {users.map((us, idx) => <div>{us.status}</div>)}
        </div>
}

export default Users;


