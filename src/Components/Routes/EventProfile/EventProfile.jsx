import React, { useContext, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { UserContext } from "../User/UserContext";
import "./EventProfile.css";
import "../Discover/Discover.css";
import ReturnArrow from "./Icons/ReturnArrow.png";
import OrganizerIcon from "./Icons/Organizer.png";
import HamburgerMenuIcon from "./Icons/HamburgerMenu.png";
import Menu from "../../Menu/Menu";

export default function EventProfile() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const location = useLocation();
  const [MenuOpen, SetMenuOpen] = useState(false);
  const { user, joinedEvents, joinEvent, leaveEvent } = useContext(UserContext);

  // Function to get category-specific gradient
  const getCategoryGradient = (category, titleClassName) => {
    // If we have titleClassName, use it to determine the gradient
    if (titleClassName) {
      const gradientMap = {
        Tech: "linear-gradient(135deg, #4318d1 0%, #7c3aed 50%, #a855f7 100%)",
        Photo: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
        Sport: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)",
        Business:
          "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
        Health: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
        Music: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
        Art: "linear-gradient(135deg, #db2777 0%, #f472b6 100%)",
        Fun: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
        NightLife: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)",
      };
      return gradientMap[titleClassName];
    }

    // Fallback: map by category name
    const categoryGradientMap = {
      Technology:
        "linear-gradient(135deg, #4318d1 0%, #7c3aed 50%, #a855f7 100%)",
      Photography:
        "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
      Sports: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)",
      Business:
        "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
      Health: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
      Music: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
      Art: "linear-gradient(135deg, #db2777 0%, #f472b6 100%)",
      Fun: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
      "Night Life": "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)",
    };
    return (
      categoryGradientMap[category] ||
      "linear-gradient(135deg, #4318d1 0%, #7c3aed 100%)"
    ); // default
  };

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
            <div>
              <p>
                Sorry, we couldn't find the event details. Please go back and
                try again.
              </p>
              <button onClick={() => navigate(-1)}>Go Back</button>
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
        <div className="EventHeader">
          <button className="BackButton" onClick={handleBackClick}>
            <img src={ReturnArrow}></img> Back to Events
          </button>
          <button className="EventProfileMenu" onClick={ShowMenu}>
            <img src={HamburgerMenuIcon}></img>
          </button>
        </div>
        <div className="EventProfileLine"></div>
        <div className="EventsInfoContainer">
          <div className="EventMoreInfo">
            <div
              className="EventProfileImage"
              style={{
                background: getCategoryGradient(
                  event.category,
                  event.titleClassName
                ),
              }}
            >
              <div className="EventProfileTitle">
                {event.titleClassName && (
                  <div className={`EventTitle ${event.titleClassName}`}>
                    <div />
                    <div>{event.title}</div>
                    <button className="Like">🤍</button>
                  </div>
                )}
                {!event.titleClassName && (
                  <div className="event-overlay">
                    <div>{event.title}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="EventProfileHeader">
              <div
                className="EventCategory"
                style={{
                  background: getCategoryGradient(
                    event.category,
                    event.titleClassName
                  ),
                }}
              >
                {event.category}
              </div>
            </div>
            <div className="ProfileTitle">
              {event.titleClassName && (
                <div className={`EventTitle ${event.titleClassName}`}>
                  <div />
                  <div>{event.title}</div>
                  <button className="Like">🤍</button>
                </div>
              )}
              {!event.titleClassName && (
                <div className="event-overlay">
                  <div>{event.title}</div>
                </div>
              )}
            </div>
            <div className="AboutEvent">
              <h2>About This Event</h2>
              <div className="EventDescription">{event.description}</div>
              <h2 className="ToBringTitle">What to Bring</h2>
              <div className="ToBringDescription">{event.whatToBring}</div>
              <h2 className="RequirementsTitle">Requirements</h2>
              <div className="RequirementsDescription">
                {event.requirements}
              </div>
            </div>
            <div className="JoinEventContainer">
              <button
                className={`JoinEvent ${isEventJoined ? "joined" : "join"}`}
                onClick={handleJoinEvent}
              >
                {isEventJoined ? "🗑️ Remove Event" : "🔐 Join Event"}
              </button>
            </div>
          </div>
          <div className="MoreDetailsContainer">
            <div className="EventMoreDetails">
              <h3>Event Details</h3>
              <div className="EventDetails">
                <h3>
                  <span>📆</span> {event.dateTimeLabel}
                </h3>
                <h3>
                  <span>📍</span> {event.location}
                </h3>
                <div className="EventAttendees">
                  <span>👥</span>
                  <div className="AttendeesInfo">
                    <h4 className="Attending">{event.attendees} attending</h4>
                    <h4>{event.maxAttendees} spots available</h4>
                  </div>
                </div>
                <h3>
                  <span>👁️</span> {event.views} views
                </h3>
              </div>
            </div>
            <div className="OrganizerDetails">
              <h3>Organizer</h3>
              <div className="Organizer">
                <div className="OrganizerLogo">
                  <div className="OrganizerImage">
                    <img src={OrganizerIcon}></img>
                  </div>
                  <div className="NameAndContact">
                    <h3>{event.organizer}</h3>
                    <h3 className="Contact">{event.organizerEmail}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
