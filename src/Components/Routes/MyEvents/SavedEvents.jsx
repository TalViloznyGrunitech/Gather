import React, { useContext, useState } from "react";
import { UserContext } from "../User/UserContext";
import Event from "../../Event/Event";
import "../Discover/Discover.css";
import "./MyEvents.css";
import HamburgerMenuIcon from "./Icons/HamburgerMenu.png";
import SiteIcon from "./Icons/SiteIcon.png";
import Menu from "../../Menu/Menu";

export default function SavedEvents() {
  const { user, savedEvents } = useContext(UserContext);
  const [MenuOpen, SetMenuOpen] = useState(false);

  // Helper function to generate titleClassName from category
  const getTitleClassName = (category, existingClassName) => {
    if (existingClassName) return existingClassName;

    const categoryMap = {
      Technology: "Tech",
      Photography: "Photo",
      Sports: "Sport",
      Business: "Business",
      Health: "Health",
      Music: "Music",
      Art: "Art",
      Fun: "Fun",
      "Night Life": "NightLife",
    };
    return categoryMap[category] || "Tech";
  };

  // Helper function to generate categoryClassName from category
  const getCategoryClassName = (category, existingClassName) => {
    if (existingClassName) return existingClassName;
    return `${category.replace(/\s+/g, "")}Category`;
  };

  if (!user) {
    return (
      <div className="Main">
        <div className="NoSavedEventsError">
          <h1>No saved events</h1>
          <p>
            <span>⛔</span>Please log in to view your saved events.
          </p>
        </div>
      </div>
    );
  }

  function ShowMenu() {
    SetMenuOpen(!MenuOpen);
  }

  function CloseMenu() {
    SetMenuOpen(false);
  }

  return (
    <>
      {MenuOpen && <Menu onClose={CloseMenu} />}
      <div className="Main">
        <div className="HostingHeader">
          <button className="MenuButton" onClick={ShowMenu}>
            <img src={HamburgerMenuIcon}></img>
          </button>
          <img className="LogoImage" src={SiteIcon}></img>
          <h3>Gather</h3>
        </div>
        <div className="MobileMenuLine"></div>
        <div className="MyEventsContainer">
          <h1 className="Title">Saved Events</h1>
          <h2 className="SecondTitle">Saved Events: {savedEvents.length}</h2>
          {savedEvents.length === 0 ? (
            <div className="NoSavedEvents">
              <h2>You have no saved events yet.</h2>
              <p>
                Browse events in the Discover section and save events that
                interest you!
              </p>
            </div>
          ) : (
            <div className="EventsContainer">
              {savedEvents.map((event) => (
                <div key={event.id} className="EventCard">
                  <Event
                    id={event.id}
                    title={event.title}
                    icon={event.icon}
                    category={event.category}
                    views={event.views}
                    name={event.name}
                    dateTimeLabel={event.dateTimeLabel}
                    location={event.location}
                    description={event.description}
                    imageUrl={event.imageUrl}
                    titleClassName={getTitleClassName(
                      event.category,
                      event.titleClassName
                    )}
                    categoryClassName={getCategoryClassName(
                      event.category,
                      event.categoryClassName
                    )}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
