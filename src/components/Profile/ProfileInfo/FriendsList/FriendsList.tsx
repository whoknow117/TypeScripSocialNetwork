import React, {useState} from 'react';
import classes from './FriendsList.module.scss';

type FriendsListType = {}

const FriendsList: React.FC<FriendsListType> = () => {


    return <div>
        <h4 className={classes.title}>
            в сети
        </h4>
        <nav className={classes.friends}>
            <ul className={classes.menu}>
                <li className={classes.item}>
                    <div className={classes.friendsAvatar}>
                        <img
                            src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg"
                            alt=""/>
                    </div>
                    <div className={classes.friendsName}>Alex Green</div>
                </li>
                <li className={classes.item}>
                    <div className={classes.friendsAvatar}>
                        <img
                            src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg"
                            alt=""/>
                    </div>
                    <div className={classes.friendsName}>Karl Pirson</div>
                </li>
                <li className={classes.item}>
                    <div className={classes.friendsAvatar}>
                        <img
                            src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg"
                            alt=""/>
                    </div>
                    <div className={classes.friendsName}>John White</div>
                </li>
                <li className={classes.item}>
                    <div className={classes.friendsAvatar}>
                        <img
                            src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg"
                            alt=""/>
                    </div>
                    <div className={classes.friendsName}>Sindy Camble</div>
                </li>
                <li className={classes.item}>
                    <div className={classes.friendsAvatar}>
                        <img
                            src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg"
                            alt=""/>
                    </div>
                    <div className={classes.friendsName}>Sindy Camble</div>
                </li>
                <li className={classes.item}>
                    <div className={classes.friendsAvatar}>
                        <img
                            src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg"
                            alt=""/>
                    </div>
                    <div className={classes.friendsName}>Sindy Camble</div>
                </li>

            </ul>
        </nav>
    </div>
}


export default FriendsList;