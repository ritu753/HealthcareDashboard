import React from 'react';
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import profileImg from "../../assets/profile-pic.jpg";
import "./Header.css"


const Header = () => {
  return (
    <header>
      <div className="logo">Health<span>care.</span></div>
      <div className='searchbar-container'>
      <div className="search-bar">
        <a href='#'><IoSearchOutline /></a>
         <input type="text" className="search" placeholder="Search" />
         </div>
       <span className="notification-icon"><FaBell /></span>
       </div>
       <div className="profile-info">
        <img src={profileImg} alt="User" className="profile-img" />
        <a href='#' className="add-button">+</a>
      </div>
    </header>
  )
}

export default Header;