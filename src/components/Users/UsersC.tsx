import React from 'react';
import classes from "./Users.module.scss";


class Users extends React.Component<any,any> {

    render() {
        return
            // <div className={classes.users}>
            //     {this.users.map((us, index) => <div key={index} className={classes.user}>
            //         <div className={classes.avatar}>
            //             <div className={classes.image}>
            //                 <img src={us.img} alt=""/>
            //             </div>
            //             {us.followed ? <button onClick={() => {unfollow(us.id)}} className={classes.follow}>unfollow</button> :
            //                 <button onClick={() => {follow(us.id)}} className={classes.follow}>follow</button>}
            //         </div>
            //         <div className={classes.userContent}>
            //             <div className={classes.userNameWrapper}>
            //                 <div className={classes.fullName}>{us.fullName}</div>
            //                 <div className={classes.status}>{us.status}</div>
            //             </div>
            //             <div className={classes.location}>
            //                 <span className={classes.city}>{us.location.city}</span>
            //                 <span className={classes.country}>{us.location.country}</span>
            //             </div>
            //         </div>
            //     </div>)}
            // </div>

    }
}

export default Users;