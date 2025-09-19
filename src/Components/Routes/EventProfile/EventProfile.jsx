import React from "react";
import { useParams, Link } from "react-router";
import "../Discover/Discover.css";
import "./eventprofile.css";
import { events } from "../../Event/Events";

export default function EventProfile() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="Main" style={{ padding: 20 }}>
        <h1 className="Title">Event not found</h1>
        <Link to="/Gather/Discover">Back to Discover</Link>
      </div>
    );
  }

  const {
    title,
    icon,
    category,
    views,
    name,
    dateTimeLabel,
    location,
    description,
    titleClassName,
    categoryClassName,
    imageUrl,
  } = event;

  return (
    <div className="Main">
      <div className="Event EventProfileWrapper">
        <Link to="/Gather/Discover" className="BackArrow" aria-label="Back to Discover">
          ←
        </Link>
        <div
          className={`EventTitle ${titleClassName} ${imageUrl ? "EventTitle--withImage" : ""}`}
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
       >
          {imageUrl && <div className="EventTitleOverlay" />}
          <div className="EventTitleContent">{title}</div>
        </div>
        <div className="Info">
          {icon}
          <div className={`Category ${categoryClassName}`}>{category}</div>
          <div className="Views">👥 {views}</div>
        </div>
        <div className="Information">
          <h1>{name}</h1>
          <h3>
            <span>📅</span>
            {dateTimeLabel}
          </h3>
          <h3>
            <span>📍</span>
            {location}
          </h3>
          <br />
          <h2>{description}</h2>
        </div>
        <div className="ButtonContainer">
          <button className="JoinEvent">🔐 Join Event</button>
        </div>
      </div>
    </div>
  );
}


