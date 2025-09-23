import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../User/UserContext";
import { events } from "../../Event/Events";
import "./EventProfile.css";

export default function EventProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, addEvent, userEvents } = useContext(UserContext);

  const event = events.find(e => e.id === id);
  const [isJoining, setIsJoining] = useState(false);

  const isEventJoined = userEvents.some(userEvent => userEvent.id === event?.id);

  const handleJoinEvent = async () => {
    if (!user) {
      alert("Please sign in to join events.");
      return;
    }

    if (isEventJoined) {
      alert("You have already joined this event!");
      return;
    }

    setIsJoining(true);
    try {
      const eventData = {
        id: event.id,
        title: event.title,
        icon: event.icon,
        category: event.category,
        views: event.views,
        name: event.name,
        dateTimeLabel: event.dateTimeLabel,
        location: event.location,
        description: event.description,
        titleClassName: event.titleClassName,
        categoryClassName: event.categoryClassName,
        imageUrl: event.imageUrl,
      };

      const result = await addEvent(eventData);
      if (result.success) {
        alert("Successfully joined the event! Check your upcoming events.");
      } else {
        alert("Error joining event: " + result.error);
      }
    } catch (error) {
      alert("Error joining event: " + error.message);
    } finally {
      setIsJoining(false);
    }
  };

  if (!event) {
    return (
      <div className="EventProfile">
        <div className="error-state">
          <h1>Event Not Found</h1>
          <p>The event you're looking for doesn't exist.</p>
          <button onClick={() => navigate("/Gather/Discover")} className="back-btn">
            ← 
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    try {
      
      let formattedDateString = dateString;
      
     
      if (dateString.includes(' at ')) {
        const [datePart, timePart] = dateString.split(' at ');
       
        const time24 = convertTo24Hour(timePart);
        formattedDateString = `${datePart} ${time24}`;
      }
      
      const date = new Date(formattedDateString);
      
   
      if (isNaN(date.getTime())) {
        return dateString; 
      }
      
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return dateString;
    }
  };

  const convertTo24Hour = (time12) => {
    const [time, modifier] = time12.split(' ');
    let [hours, minutes] = time.split(':');
    
    hours = parseInt(hours, 10);
    
    if (modifier === 'AM') {
      if (hours === 12) {
        hours = 0;
      }
    } else if (modifier === 'PM') {
      if (hours !== 12) {
        hours += 12;
      }
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  return (
    <div className="EventProfile">
      <div className="event-header">
        <button onClick={() => navigate("/Gather/Discover")} className="back-btn">
          ← 
        </button>
        
        <div 
          className={`event-hero ${event.titleClassName}`}
          style={
            event.imageUrl
              ? {
                  backgroundImage: `url(${event.imageUrl})`,
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
              event.imageUrl
                ? {
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                    borderRadius: "12px",
                  }
                : undefined
            }
          />
          <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
            <h1>{event.title}</h1>
            <div className="hero-meta">
              <span className="event-icon">{event.icon}</span>
              <span className="event-category">{event.category}</span>
              <span className="event-views">👀 {event.views} views</span>
            </div>
          </div>
        </div>
      </div>

      <div className="event-content">
        <div className="event-info-card">
          <h2>{event.name}</h2>
          
          <div className="event-details">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <div className="detail-content">
                <strong>Date & Time</strong>
                <p>{formatDate(event.dateTimeLabel)}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div className="detail-content">
                <strong>Location</strong>
                <p>{event.location}</p>
              </div>
            </div>
          </div>
          
          <div className="event-description">
            <h3>About this event</h3>
            <p>{event.description}</p>
          </div>
          
          <div className="action-section">
            <button 
              className={`join-event-btn ${isEventJoined ? 'joined' : ''}`}
              onClick={handleJoinEvent}
              disabled={isJoining || isEventJoined}
            >
              {isJoining ? 'Joining...' : isEventJoined ? '✓ Joined' : '🔐 Join Event'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
