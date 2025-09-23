import React, { useContext } from "react";
import { useState, useEffect, useRef, createContext } from "react";
import { NavLink } from "react-router";
import "../../App.css";
import "./Sidebar.css";
import SiteLogo from "./Icons/SiteIcon.svg";
import DashboardIcon from "./Icons/Dashboard.png";
import SearchIcon from "./Icons/Discover.png";
import MeetupsIcon from "./Icons/MyMeetups.png";
import CalendarIcon from "./Icons/Calendar.png";
import MessagesIcon from "./Icons/Messages.png";
import NetworkIcon from "./Icons/MyNetwork.png";
import DropdownIcon from "./Icons/DropdownArrow.png";
import UserLogo from "./Icons/UserLogo.png";
import { useLocation } from "react-router";
import { UserContext } from "../Routes/User/UserContext";


export default function Sidebar() {
  const [ShowMeetups, SetShowMeetups] = useState(false);

  const Location = useLocation();

  const { user } = useContext(UserContext); 
 


  function ShowDiv() {
    SetShowMeetups(!ShowMeetups);
  }

  return (
    <>
      <div className="Sidebar">
        <div className="SiteLogo">
          <img src={SiteLogo} className="LogoImage" alt="Site Logo" />
          <div className="SiteName">
            <h3>Gather</h3>
            <h4>Tap. Meet. Repeat.</h4>
          </div>
        </div>
        <div className="Line"></div>
        <div className="Options">
          <NavLink to={"/Gather/Dashboard"}>
            <button
              className={`Dashboard${
                Location.pathname === "/Gather/Dashboard" ? " Active" : ""
              }`}
            >
              <img src={DashboardIcon}></img>Dashboard
            </button>
          </NavLink>
          <NavLink to={"/Gather/Discover"}>
            <button
              className={`Discover${
                Location.pathname === "/Gather/Discover" ? " Active" : ""
              }`}
            >
              <img src={SearchIcon}></img>Discover Meetups
            </button>
          </NavLink>
          <NavLink to={"/Gather/MyMeetups"}>
            <button
              className={`MyMeetups${
                Location.pathname === "/Gather/MyMeetups" ? " Active" : ""
              }`}
              onClick={ShowDiv}
            >
              <img src={MeetupsIcon}></img>My Meetups
              <img className="Dropdown" src={DropdownIcon}></img>
            </button>
          </NavLink>
          {ShowMeetups && (
            <div className="SubMenu">
              <NavLink to={"/Gather/MyMeetups/UpcomingEvents"}>
                <button>
                  Upcoming Events<div className="UpcomingNumber">0</div>
                </button>
              </NavLink>
              <NavLink to={"/Gather/MyMeetups/Hosting"}>
                <button>
                  Hosting<div className="HostingNumber">0</div>
                </button>
              </NavLink>
              <NavLink to={"/Gather/MyMeetups/PastEvents"}>
                <button>
                  Past Events<div className="PastEventsNumber">0</div>
                </button>
              </NavLink>
              <NavLink to={"/Gather/MyMeetups/SavedEvents"}>
                <button>
                  Saved Events<div className="SavedEventsNumber">0</div>
                </button>
              </NavLink>
            </div>
          )}
          <NavLink to={"/Gather/Calendar"}>
            <button
              className={`Calendar${
                Location.pathname === "/Gather/Calendar" ? " Active" : ""
              }`}
            >
              <img src={CalendarIcon}></img>Calendar
            </button>
          </NavLink>
          <NavLink to={"/Gather/Messages"}>
            <button
              className={`Messages${
                Location.pathname === "/Gather/Messages" ? " Active" : ""
              }`}
            >
              <img src={MessagesIcon}></img>Messages
              <div className="MessagesNumber">0</div>
            </button>
          </NavLink>
          <NavLink to={"/Gather/MyNetwork"}>
            <button
              className={`MyNetwork${
                Location.pathname === "/Gather/MyNetwork" ? " Active" : ""
              }`}
            >
              <img src={NetworkIcon}></img>My Network
            </button>
          </NavLink>
        </div>
        <div className="Line"></div>
        <div className="UserContainer">
          <div className="User">
            <div className="NameAndSubscription">
              <div className="UserImage">
                <img src={UserLogo}></img>
              </div>
              <div className="UserDetails">
                <h4>{user?.displayName || "Guest"}</h4>
                <h5>{user?.email || "user@example.com"}</h5>
              </div>
            </div>
            <NavLink to={"/Gather/SignUp"}>
              <button className="ChangeUser">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
