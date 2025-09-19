import React from "react";
import "./Discover.css";
import Search from "../../Search/Search";
import { events } from "../../Event/Events";
import Event from "../../Event/Event";



export default function Discover() {
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

        {Array.from(new Set(events.map((e) => e.category))).map((category) => (
          <div key={category} style={{ margin: "30px 20px 0 20px" }}>
            <h1 className="Title">{category}</h1>
            <div className="Events">
              {events
                .filter((e) => e.category === category)
                .map((ev) => (
                  <Event key={ev.id} {...ev} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );}
