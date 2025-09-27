import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "./Icons/Search.png";
import HamburgerMenuIcon from "./Icons/HamburgerMenu.png";
import SiteLogo from "./Icons/SiteIcon.png";
import Menu from "../Menu/Menu";

export default function Search({ onSearchChange, eventCount = 0 }) {
  const [MenuOpen, SetMenuOpen] = useState(false);

  function ShowMenu() {
    SetMenuOpen(!MenuOpen);
  }

  function CloseMenu() {
    SetMenuOpen(false);
  }
  return (
    <>
      {MenuOpen && <Menu onClose={CloseMenu} />}
      <div className="SearchContainer">
        <button onClick={ShowMenu} className="MenuButtonWeb MenuHidden">
          <img src={HamburgerMenuIcon}></img>
        </button>
        <div className="MobileHeader Hidden">
          <button onClick={ShowMenu} className="MenuButton">
            <img src={HamburgerMenuIcon}></img>
          </button>
          <img src={SiteLogo} className="LogoImage" alt="Site Logo" /> Gather
        </div>
        <div className="SearchBox">
          <img src={SearchIcon}></img>
          <input
            placeholder="Search meetups, locations, descriptions..."
            type="text"
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>
        <h2 className="EventsFound">{eventCount} events found</h2>
      </div>
      <div className="Line"></div>
    </>
  );
}
