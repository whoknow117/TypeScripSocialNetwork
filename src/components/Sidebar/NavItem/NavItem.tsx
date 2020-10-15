import React from 'react';
import classes from './NavItem.module.scss';
import {NavLink} from "react-router-dom";


type PropsType = {
    path: string,
    title: string,
    icon: any
}


const NavItem = (props: PropsType) => {

    return (
        <div className={classes.item}>
            <NavLink className={classes.itemLink} to={props.path} activeClassName={classes.active}>
                <div className={classes.icon}>{props.icon}</div>
                <div className={classes.title}>{props.title}</div>
            </NavLink>
        </div>
    )
}

export default NavItem;