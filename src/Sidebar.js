import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMore';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"  title="Rose Le" />
            <SidebarRow 
            Icon={LocalHospitalIcon}
            title="Covid-19 Infomation Center" />
           <SidebarRow 
            Icon={EmojiFlagsIcon}
            title="Pages" />
             <SidebarRow 
            Icon={PeopleIcon}
            title="Friends" />
             <SidebarRow 
            Icon={ChatIcon}
            title="Messenger" />
             <SidebarRow 
            Icon={StorefrontIcon}
            title="Marketplace" />
            <SidebarRow 
            Icon={VideoLibraryIcon}
            title="Videos" />
            <SidebarRow 
            Icon={ExpandMoreOutlined}
            title="Marketplace" />
        </div>
    )
}

export default Sidebar
