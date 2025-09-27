import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Menu.css";
import SiteIcon from "./Icons/SiteIcon.svg";
import CloseMenu from "./Icons/Close.png";
import { UserContext } from "../Routes/User/UserContext";
import { auth } from "../FireBase/FireBase";
import { signOut } from "firebase/auth";
import CalendarIcon from "./Icons/Calendar.svg";
import DiscoverIcon from "./Icons/Discover.svg";
import MessagesIcon from "./Icons/Messages.svg";
import MyEventsIcon from "./Icons/MyMeetups.svg";
import MyNetworkIcon from "./Icons/MyNetwork.svg";
import SignOutIcon from "./Icons/SignOut.svg";
import HostingIcon from "./Icons/Hosting.svg";
import SavedIcon from "./Icons/Saved.svg";
import UserLogo from "./Icons/UserLogo.svg";
import SignInIcon from "./Icons/SignIn.svg";

export default function Menu({ onClose }) {
  const { user, joinedEvents, savedEvents } = useContext(UserContext);
  const navigate = useNavigate();

  function MenuClose() {
    console.log("Menu was closed");
    if (onClose) {
      onClose();
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      MenuClose();
      navigate("/Gather/Discover");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleNavClick = () => {
    MenuClose(); // Close menu when navigating
  };
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <>
      <div className="MenuContainer" onClick={MenuClose}>
        <div className="Menu" onClick={(e) => e.stopPropagation()}>
          <div className="LogoContainer">
            <img src={SiteIcon}></img>
            <h1>Gather</h1>
            <button onClick={MenuClose}>
              <img className="CloseMenu" src={CloseMenu}></img>
            </button>
          </div>
          <div className="MenuLine"></div>
          <h4 className="MenuCategory">NAVIGATION</h4>
          <div className="MenuOptions">
            <NavLink to="/Gather/Discover" onClick={handleNavClick}>
              <div className="LinkContainer">
                <img src={DiscoverIcon}></img>
                <div>
                  <button className="MenuOption">Discover Events</button>
                  <h4>Find new events</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Gather/Calendar" onClick={handleNavClick}>
              <div className="LinkContainer">
                <img src={CalendarIcon}></img>
                <div>
                  <button className="MenuOption">Calendar</button>
                  <h4>Scheduled events</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Gather/MyEvents" onClick={handleNavClick}>
              <div className="LinkContainer">
                <img src={MyEventsIcon}></img>
                <div>
                  <button className="MenuOption">My Events</button>
                  <h4>Events you've joined</h4>
                </div>
                {user && joinedEvents?.length > 0 && (
                  <span className="MenuBadge MyEventsNumber">
                    {joinedEvents.length}
                  </span>
                )}
              </div>
            </NavLink>
            <NavLink to="/Gather/MyEvents/Hosting" onClick={handleNavClick}>
              <div className="LinkContainer">
                <img src={HostingIcon}></img>
                <div>
                  <button className="MenuSubOption">Hosting</button>
                  <h4>Create events</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Gather/MyEvents/SavedEvents" onClick={handleNavClick}>
              <div className="LinkContainer">
                <img src={SavedIcon}></img>
                <div>
                  <button className="MenuSubOption">Saved Events</button>
                  <h4>Save events you like</h4>
                </div>
                {savedEvents?.length > 0 && (
                  <span className="MenuBadge SavedEventsNumber">
                    {savedEvents.length}
                  </span>
                )}
              </div>
            </NavLink>
            <NavLink to="/Gather/Messages" onClick={handleNavClick}>
              <div className="LinkContainer">
                <img src={MessagesIcon}></img>
                <div>
                  <button className="MenuOption">Messages</button>
                  <h4>Message other people</h4>
                </div>
                <span className="MenuBadge MessagesNumber">0</span>
              </div>
            </NavLink>
            <NavLink
              to="/Gather/MyNetwork/MyConnections"
              onClick={handleNavClick}
            >
              <div className="LinkContainer">
                <img src={MyNetworkIcon}></img>
                <div>
                  <button className="MenuOption">My Network</button>
                  <h4>Connect with other people</h4>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="MenuUser">
            <div className="SecondMenuLine"></div>
            <div className="UserInfoContainer">
              <div className="UserInfo">
                <div className="UserImage">
                  <img src={UserLogo}></img>
                </div>
                <div>
                  <h4>{user?.displayName || "Guest"}</h4>
                  <p>{user?.email || "Not signed in"}</p>
                </div>
              </div>
            </div>
            <div className="MenuButtonContainer">
              {user ? (
                <button className="MenuSignOut" onClick={handleSignOut}>
                  <img src={SignOutIcon}></img>
                  Sign Out
                </button>
              ) : (
                <NavLink to="/Gather/SignUp" onClick={handleNavClick}>
                  <button className="MenuSignUp">
                    <img src={SignInIcon}></img>
                    Sign Up
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
