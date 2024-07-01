import React from 'react'
import "./Navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import GridViewOutlined from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="left1">
            <span className='navbar-title1'>Hello World</span>
            <HomeOutlinedIcon/>
            <BedtimeOutlinedIcon/>
            {/* <WbSunnyOutlinedIcon/> */}
            <GridViewOutlinedIcon/>
            <div className="search1">
              <SearchOutlinedIcon/>
              <input type="text" placeholder='Search to increase connectivity' />
            </div>
        </div>
        <div className="right1">
            <PermIdentityOutlinedIcon/>
            <NotificationsActiveOutlinedIcon/>
            <EmailOutlinedIcon/>
            <div className="user1">
              <img src="https://help.apple.com/assets/65382CE37BB3E2BCF80ADABA/65382CE57BB3E2BCF80ADAC0/en_US/dbb0631358aad57b8b57484c2a476c7e.png" alt="" />
              <span>Shayam</span>
            </div>
        </div>
    </div>
  )
}
