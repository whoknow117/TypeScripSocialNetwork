import React from 'react';
import classes from './Profile.module.scss';


const Profile = ( ) => {

    return <div className={classes.profile}>
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src=" data:image/jpeg;base64,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" alt=""/>
            </div>
            <h3 className={classes.name}>Sarah May</h3>
            <h4 className={classes.title}>
                в сети
            </h4>
            <nav className={classes.activeFriends}>
                <ul className={classes.menu}>
                    <li className={classes.item}>
                        <div className={classes.friendsAvatar}>
                            <img  src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsName}>Alex Green</div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes.friendsAvatar}>
                            <img  src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsName}>Karl Pirson</div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes.friendsAvatar}>
                            <img  src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsName}>John White</div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes.friendsAvatar}>
                            <img  src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsName}>Sindy Camble</div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes.friendsAvatar}>
                            <img  src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsName}>Sindy Camble</div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes.friendsAvatar}>
                            <img  src="https://format-com-cld-res.cloudinary.com/image/private/s--a_vnxgJu--/c_crop,h_2816,w_4231,x_0,y_1555/c_fill,g_center,h_506,w_760/fl_keep_iptc.progressive,q_95/v1/94204b61de5d1982f8ee05fe0767c33b/img004.jpg" alt=""/>
                        </div>
                        <div className={classes.friendsName}>Sindy Camble</div>
                    </li>

                </ul>
            </nav>
            <div></div>
        </div>
        <div className={classes.content}></div>
    </div>
}

export default Profile;