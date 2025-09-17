import react from "react";
import { useState } from "react";
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

export default function Sidebar() {
  const [ShowMeetups, SetShowMeetups] = useState(false);

  function MakeActive(button) {
    const Buttons = document.querySelectorAll(".Options button");
    Buttons.forEach((button) => {
      button.classList.remove("Active");
    });
    button.currentTarget.classList.add("Active");
  }

  function ShowDiv() {
    SetShowMeetups(!ShowMeetups);
  }

  return (
    <>
      <div className="Sidebar">
        <div className="SiteLogo">
          <img src={SiteLogo} className="LogoImage" alt="Site Logo" />
          <div className="SiteName">
            <h3>MeetUp</h3>
            <h4>Tap. Meet. Repeat.</h4>
          </div>
        </div>
        <div className="Line"></div>
        <div className="Options">
          <button onClick={MakeActive}>
            <img src={DashboardIcon}></img>Dashboard
          </button>
          <button onClick={MakeActive}>
            <img src={SearchIcon}></img>Discover Meetups
          </button>
          <button
            onClick={(e) => {
              MakeActive(e);
              ShowDiv();
            }}
          >
            <img src={MeetupsIcon}></img>My Meetups
            <img className="Dropdown" src={DropdownIcon}></img>
          </button>
          {ShowMeetups && (
            <div className="SubMenu">
              <button>
                Upcoming Events<div className="UpcomingNumber">0</div>
              </button>
              <button>
                Hosting<div className="HostingNumber">0</div>
              </button>
              <button>
                Past Events<div className="PastEventsNumber">0</div>
              </button>
              <button>
                Saved Events<div className="SavedEventsNumber">0</div>
              </button>
            </div>
          )}
          <button onClick={MakeActive}>
            <img src={CalendarIcon}></img>Calendar
          </button>
          <button onClick={MakeActive}>
            <img src={MessagesIcon}></img>Messages
            <div className="MessagesNumber">0</div>
          </button>
          <button onClick={MakeActive}>
            <img src={NetworkIcon}></img>My Network
          </button>
        </div>
        <div className="Line"></div>
        <div className="UserContainer">
          <div className="User">
            <div className="NameAndSubscription">
              <div className="UserImage">
                <img src={UserLogo}></img>
              </div>
              <div className="UserDetails">
                <h4>Username</h4>
                <h5>Username@gmail.com</h5>
              </div>
            </div>
            <button className="ChangeUser">Change User</button>
          </div>
        </div>
      </div>
    </>
  );
}
