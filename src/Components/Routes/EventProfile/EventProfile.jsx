import React, { useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { UserContext } from "../User/UserContext";
import "./EventProfile.css";
import "../Discover/Discover.css";

export default function EventProfile() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const location = useLocation();
  const { user, joinedEvents, joinEvent, leaveEvent } = useContext(UserContext);

  // Get event data from navigation state
  const eventData = location.state?.eventData;

  // If no event data is passed, redirect back or show error
  if (!eventData) {
    return (
      <div className="event-profile">
        <div className="event-profile-container">
          <div className="event-header">
            <button className="back-button" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <h1 className="event-title">Event Not Found</h1>
          </div>
          <div className="event-content">
            <div style={{ padding: "40px", textAlign: "center" }}>
              <p>
                Sorry, we couldn't find the event details. Please go back and
                try again.
              </p>
              <button
                onClick={() => navigate(-1)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#4318d1",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Use the actual event data
  const event = {
    ...eventData,
    // Add some additional fields that might not be in the original event data
    attendees: 24, // This would come from your backend in a real app
    maxAttendees: 50,
    organizer: eventData.name || "Event Organizer",
    organizerEmail: "contact@example.com",
    tags: eventData.category ? [eventData.category] : [],
    requirements: "No specific requirements",
    whatToBring: "Just bring yourself and enthusiasm!",
  };

  // Debug logging
  console.log("EventProfile - eventData received:", eventData);
  console.log("EventProfile - event.titleClassName:", event.titleClassName);
  console.log("EventProfile - event.title:", event.title);

  const isEventJoined = joinedEvents.some(
    (joinedEvent) => joinedEvent.id === event.id
  );

  const handleJoinEvent = async () => {
    if (!user) {
      navigate("/Gather/LogIn");
      return;
    }

    const joinEventData = {
      id: event.id,
      title: event.title,
      category: event.category,
      views: event.views,
      name: event.name,
      dateTimeLabel: event.dateTimeLabel,
      location: event.location,
      description: event.description,
      titleClassName: event.titleClassName,
      categoryClassName: event.categoryClassName,
      imageUrl: event.imageUrl,
      joinedAt: new Date().toISOString(),
    };

    if (isEventJoined) {
      await leaveEvent(event.id);
    } else {
      await joinEvent(joinEventData);
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="event-profile">
      <div className="event-profile-container">
        {/* Header with back button */}
        <div className="event-header">
          <button className="back-button" onClick={handleBackClick}>
            ← Back
          </button>
          <h1 className="event-title">{event.title}</h1>
        </div>

        {/* Main content */}
        <div className="event-content">
          {/* Event image */}
          <div className="event-image-section">
            <div
              className="event-image"
              style={{
                background: event.titleClassName
                  ? undefined
                  : "linear-gradient(135deg, #4318d1 0%, #7c3aed 100%)",
              }}
            >
              {/* Use same gradient class used on cards when available */}
              {event.titleClassName && (
                <div
                  className={`EventTitle ${event.titleClassName}`}
                  style={{ height: "100%", borderRadius: 0 }}
                >
                  <div />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    {event.title}
                  </div>
                  <button
                    className="Like"
                    style={{ position: "absolute", zIndex: 1, display: "none" }}
                  >
                    🤍
                  </button>
                </div>
              )}
              {!event.titleClassName && (
                <div className="event-overlay">
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    zIndex: 2
                  }}>
                    {event.title}
                  </div>
                  <div className="event-category">{event.category}</div>
                  <div className="event-views">👁️ {event.views} views</div>
                </div>
              )}
            </div>
          </div>

          {/* Event details */}
          <div className="event-details">
            <div className="event-info">
              <div className="event-organizer">
                <h3>📆 {event.dateTimeLabel}</h3>
                <h3>📍 {event.location}</h3>
                <h3>👤 Organized by {event.organizer}</h3>
                <h3>
                  👥 {event.attendees}/{event.maxAttendees} attendees
                </h3>
              </div>

              <div className="event-description">
                <h2>About this event</h2>
                <p>{event.description}</p>
              </div>

              <div className="event-tags">
                <h3>Tags</h3>
                <div className="tags-container">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="event-requirements">
                <h3>Requirements</h3>
                <p>{event.requirements}</p>
              </div>

              <div className="event-bring">
                <h3>What to bring</h3>
                <p>{event.whatToBring}</p>
              </div>
            </div>

            <div className="event-actions">
              <div className="join-section">
                <button
                  className={`join-button ${isEventJoined ? "joined" : "join"}`}
                  onClick={handleJoinEvent}
                >
                  {isEventJoined ? "🗑️ Remove Event" : "🔐 Join Event"}
                </button>
                <div className="attendee-count">
                  {event.attendees} of {event.maxAttendees} spots filled
                </div>
              </div>

              <div className="contact-section">
                <h3>Questions?</h3>
                <p>Contact the organizer: {event.organizerEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
