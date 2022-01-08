import { Avatar } from '@material-ui/core';
import React from 'react'
import '../styles/SideBar.css';
import BgImg from '../icons/bg.jpeg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function SideBar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src={BgImg} alt='img' />
                <Avatar className='sidebar_avatar' src={user.photoURL}>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statNum'>2,345</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on post</p>
                    <p className='sidebar_statNum'>8,998</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("AWS Live Security Hacking - 4 Part Series")}
                {recentItem("Startup Jobs Expo (ONLINE)")}
                {recentItem("React Native EU 2021 - Virtual Edition")}
                {recentItem("Shopping at the Edge: Solving for Infinite Customer Experience Journeys")}
            </div>
        </div>
    )
}

export default SideBar
