import Search from "../../Search/Search";
import MyConnections from "./MyConnections";
import "./MyNetwork.css";
import { NavLink } from "react-router";
import { useLocation } from "react-router";

export default function MyNetwork() {
  const Location = useLocation();
  return (
    <>
      <Search />
      <h1 className="Title">My Network</h1>
      <h2 className="SecondTitle">
        Manage your professional connections and discover new opportunities
      </h2>
      <div className="HeaderOptions">
        <NavLink to={"/Gather/MyNetwork/MyConnections"}>
          <button
            className={`${
              Location.pathname === "/Gather/MyNetwork/MyConnections"
                ? " Active"
                : ""
            }`}
          >
            My Connections
          </button>
        </NavLink>
        <NavLink to={"/Gather/MyNetwork/ConnectionRequests"}>
          <button
            className={`${
              Location.pathname === "/Gather/MyNetwork/ConnectionRequests"
                ? " Active"
                : ""
            }`}
          >
            Connection Requests
          </button>
        </NavLink>
        <NavLink to={"/Gather/MyNetwork/FindConnections"}>
          <button
            className={`${
              Location.pathname === "/Gather/MyNetwork/FindConnections"
                ? " Active"
                : ""
            }`}
          >
            Find Connections
          </button>
        </NavLink>
      </div>
      <div className="LineContainer">
        <div className="Line"></div>
      </div>
    </>
  );
}
