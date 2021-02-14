import React from 'react';
import classes from './HeaderLogo.module.scss';





const HeaderLogo = ( ) => {


    return (
        <div className={classes.headerLogo}>

                <img className={classes.headerLogoImage}
                     src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-1-color-black-rgb.png" alt='#'/>
            I.T.<span>Media</span>

        </div>
    )


}

export default HeaderLogo;