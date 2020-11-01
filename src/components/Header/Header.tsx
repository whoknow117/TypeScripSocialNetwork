import React from 'react';
import classes from './Header.module.scss';
import Search from './Search/Search';
import NavIcons from "./NavIcons/NavIcons";
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import HeaderLogo from "./HeaderLogo/HeaderLogo";



const Header = () => {
    let arrIcons = [
        {icon: <AttachFileSharpIcon/>},
        {icon: <BuildSharpIcon/>},
        {icon: <CallSharpIcon/>},
        {icon: <DraftsSharpIcon/>}

    ];

    return (
        <header className={classes.header}>

                <HeaderLogo/>
                <Search/>
                <div className={classes.icons}>
                    {arrIcons.map((el) => {
                        return (
                            <NavIcons icon={el.icon}/>
                        )
                    })}
                </div>
        </header>)
}

export default Header;