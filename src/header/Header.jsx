import React from 'react'
import '../styles/Header.css';
import LinkedInIcon from '../icons/linkedin.png'
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Me from '../icons/me.jpg';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase/firebaseJs';

function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className='header_left'>
                <img src={LinkedInIcon} alt="linkedin" />
                <div className='header_search'>
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>
            <div className='header_right'>
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption title='me' avatar={Me} onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
