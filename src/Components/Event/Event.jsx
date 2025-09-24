import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../Routes/User/UserContext";

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
  imageUrl,
  onCategoryClick,
}) {
  const [expanded, setExpanded] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const navigate = useNavigate();
  const { user, joinedEvents, joinEvent, leaveEvent } = useContext(UserContext);

  const words = (description || "").split(" ");
  const limit = 4;
  const isLong = words.length > limit;
  const preview = words.slice(0, limit).join(" ");

  const handleCategoryClick = () => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  const isEventJoined = joinedEvents.some(event => event.id === id);

  const handleJoinEvent = async () => {
    if (!user) {
      navigate('/Gather/LogIn');
      return;
    }

    setIsJoining(true);
    
    const eventData = {
      id,
      title,
      icon,
      category,
      views,
      name,
      dateTimeLabel,
      location,
      description,
      imageUrl,
      joinedAt: new Date().toISOString()
    };

    if (isEventJoined) {
      await leaveEvent(id);
    } else {
      await joinEvent(eventData);
    }
    
    setIsJoining(false);
  };

  return (
    <div className="Event">
      <div
        className={`EventTitle ${titleClassName}`}
        style={
          imageUrl
            ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }
            : undefined
        }
      >
        <div
          style={
            imageUrl
              ? {
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.45))",
                  borderRadius: "12px",
                }
              : undefined
          }
        />
        <div style={{ position: "relative", zIndex: 1 }}>{title}</div>
        <button className="Like" style={{ position: "absolute", zIndex: 1 }}>🤍</button>
      </div>
      <div className="Info">
        {icon}
        <div 
          className={`Category ${categoryClassName}`}
          onClick={handleCategoryClick}
          style={{ cursor: "pointer" }}
        >
          {category}
        </div>
        <div className="Views">�� {views}</div>
      </div>
      <div className="Information">
        <h1>{name}</h1>
        <h3>
          <span>📆</span>
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
              onClick={() => navigate(`/Gather/EventProfile/${id}`, {
                state: {
                  eventData: {
                    id, title, icon, category, views, name, dateTimeLabel, location, description, imageUrl
                  }
                }
              })}
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
        <button 
          className="JoinEvent" 
          onClick={handleJoinEvent}
          disabled={isJoining}
          style={{
            backgroundColor: isEventJoined ? '#dc3545' : '#4318d1',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: isJoining ? 'not-allowed' : 'pointer',
            opacity: isJoining ? 0.7 : 1
          }}
        >
          {isJoining ? 'Processing...' : (isEventJoined ? '🗑️ Remove Event' : '🔐 Join Event')}
        </button>
      </div>
    </div>
  );
}