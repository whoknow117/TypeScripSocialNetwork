import React from 'react';
import classes from './NavIcons.module.scss';


type PropsType = {

    icon: any
}



const NavIcons = (props: PropsType) => {


    return (
        <div className={classes.icon}>
            {props.icon}
        </div>)
}

export default NavIcons;