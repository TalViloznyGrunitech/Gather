import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Event({
  id,
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
  onCategoryClick,
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const words = (description || "").split(" ");
  const limit = 4;
  const isLong = words.length > limit;
  const preview = words.slice(0, limit).join(" ");

  const handleCategoryClick = () => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  return (
    <div className="Event">
      <div className={`EventTitle ${titleClassName}`}>
        <div />
        <div style={{ position: "relative", zIndex: 1 }}>{title}</div>
        <button className="Like" style={{ position: "absolute", zIndex: 1 }}>
          🤍
        </button>
      </div>
      <div className="Info">
        {icon}
        <div
          className={`Category ${categoryClassName}`}
          onClick={handleCategoryClick}
        >
          {category}
        </div>
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
        <h2 style={{ lineHeight: 1.4 }}>
          {`${preview}...`}
          {isLong && (
            <button
              onClick={() => navigate(`/Gather/Discover/event/${id}`)}
              style={{
                marginLeft: 8,
                background: "none",
                border: "none",
                color: "#4318d1",
                cursor: "pointer",
                fontSize: "0.9em",
                padding: 0,
              }}
            >
              Show more
            </button>
          )}
        </h2>
      </div>
      <div className="ButtonContainer">
        <button className="JoinEvent">🔐 Join Event</button>
      </div>
    </div>
  );
}
