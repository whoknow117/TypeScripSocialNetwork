import React from 'react';
import classes from './Sidebar.module.scss';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import DvrIcon from '@material-ui/icons/Dvr';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';
import NavItem from "./NavItem/NavItem";




const Sidebar = () => {


    return (


        <nav className={classes.nav}>

            <div className={classes.wrap}>
                <NavItem path='/profile' icon={<AccountBoxIcon/>} title={'Profile'}/>
                <NavItem path='/dialogs' icon={<EmailIcon/>} title={'Messages'}/>
                <NavItem path='/asd' icon={<DvrIcon/>} title={'News'}/>
                <NavItem path='/praaasofile' icon={<MusicNoteIcon/>} title={'Music'}/>
                <NavItem path='/prodsadfile' icon={<SettingsIcon/>} title={'Settings'}/>
            </div>
        </nav>)
}
export default Sidebar;