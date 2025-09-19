import "./Search.css";
import SearchIcon from "./Icons/Search.png";
import HamburgerMenuIcon from "./Icons/HamburgerMenu.png";
import SiteLogo from "./Icons/SiteIcon.png";

export default function Search() {
  return (
    <>
      <div className="SearchContainer">
        <div className="MobileHeader Hidden">
          <button className="MenuButton">
            <img src={HamburgerMenuIcon}></img>
          </button>
          <img src={SiteLogo} className="LogoImage" alt="Site Logo" /> Gather
        </div>
        <div className="SearchBox">
          <img src={SearchIcon}></img>
          <input
            placeholder="Search meetups, locations, descriptions..."
            type="text"
          ></input>
        </div>
        <h2 className="EventsFound">0 events found</h2>
      </div>
      <div className="Line"></div>
    </>
  );
}
