import "./Search.css";
import SearchIcon from "./Icons/Search.png";

export default function Search() {
  return (
    <>
      <div className="SearchContainer">
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
