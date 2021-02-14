import React from 'react';
import classes from './Sidebar.module.scss';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import DvrIcon from '@material-ui/icons/Dvr';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';
import NavItem from "./NavItem/NavItem";
import {NavBarType} from "../../redux/sidebarReducer";
import AnnouncementIcon from '@material-ui/icons/Announcement';


export type SidebarPropsType = {
    sidebar: NavBarType
}

let iconArr = [
    <AccountBoxIcon/>,
    <EmailIcon/>,
    <DvrIcon/>,
    <AnnouncementIcon/>,
    <MusicNoteIcon/>,
    <SettingsIcon/>,

]


const Sidebar:React.FC<SidebarPropsType> = ({sidebar }) => {


    return (


        <nav className={classes.nav}>

            <div className={classes.wrap}>
                {sidebar.map((el,idx) => {
                    return <NavItem key={el.id} title={el.title} path={el.path} icon={(iconArr[idx])} />
                })}
            </div>
        </nav>)
}
export default Sidebar;