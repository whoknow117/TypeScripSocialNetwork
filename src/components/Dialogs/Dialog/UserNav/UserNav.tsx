import React from 'react';
import classes from './UserNav.module.scss';


function UserNav() {
    return (
        <div className={classes.userNav}>
            <div className={classes.userInfo}>
                <div className={classes.image}>
                    <img src="https://i.insider.com/589dbb873149a101788b4c85?width=1100&format=jpeg&auto=webp" alt="#"/>
                </div>
                <div className={classes.content}>
                    <h4 className={classes.title}>Alex</h4>
                    <span className={classes.time}>В сети: сегодня в 12:30</span>
                </div>
            </div>
            <div></div>

        </div>
    )


}

export default UserNav;