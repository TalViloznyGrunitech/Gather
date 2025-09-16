import react from "react";
import "./Main.css";
import Search from "../Search/Search";
import Events from "../Event/Events";

export default function Main() {
  return (
    <>
      <div className="Main">
        <Search />
        <h1 className="Title">Discover Meetups</h1>
        <h2 className="SecondTitle">
          Find and join amazing events in your area
        </h2>
        <div className="Categories">
          <button>💻 Technology</button>
          <button>💼 Business</button>
          <button>📸 Photography</button>
          <button>📚 Literature</button>
          <button>🧘 Health</button>
          <button>⚽ Sports</button>
        </div>
        <Events />
      </div>
    </>
  );
}
