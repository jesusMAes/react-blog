import React from "react";
import './topbar.css';


export default function TopBar (){

  return(
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-solid fa-at"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src='./images/profilePic.png' alt="profile" className="topImage" />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}