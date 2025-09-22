import Search from "../../Search/Search";
import "./MyNetwork.css";

export default function MyNetwork() {
  return (
    <>
      <div className="Main">
        <Search />
        <h1 className="Title">My Network</h1>
        <h2 className="SecondTitle">
          Manage your professional connections and discover new opportunities
        </h2>
        <div className="HeaderOptions">
          <button className="Active">My Connections</button>
          <button>Connection Request</button>
          <button>Find Connections</button>
        </div>
        <div className="LineContainer">
          <div className="Line"></div>
        </div>
      </div>
    </>
  );
}
