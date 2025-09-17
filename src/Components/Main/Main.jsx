import react from "react";
import "./Main.css";
import Search from "../Search/Search";
import Events from "../Event/Events";

export default function Main() {
  function MakeActive(button) {
    const Buttons = document.querySelectorAll(".Categories button");
    Buttons.forEach((button) => {
      button.classList.remove("Active");
    });
    button.currentTarget.classList.add("Active");
  }

  return (
    <>
      <div className="Main">
        <Search />
        <h1 className="Title">Discover Meetups</h1>
        <h2 className="SecondTitle">
          Find and join amazing events in your area
        </h2>
        <div className="Categories">
          <button className="All" onClick={MakeActive}>
            <span>🌟</span> All Categories
          </button>
          <button onClick={MakeActive} className="Active">
            <span>💻</span> Technology
          </button>
          <button onClick={MakeActive}>
            <span>💼</span> Business
          </button>
          <button onClick={MakeActive}>
            <span>📸</span> Photography
          </button>
          <button onClick={MakeActive}>
            <span>📚</span> Literature
          </button>
          <button onClick={MakeActive}>
            <span>🧘</span> Health
          </button>
          <button onClick={MakeActive}>
            <span>⚽</span> Sports
          </button>
        </div>
        <Events />
      </div>
    </>
  );
}
