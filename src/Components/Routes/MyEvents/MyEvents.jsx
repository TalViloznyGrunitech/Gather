import React, { useContext } from "react";
import { UserContext } from "../User/UserContext";
import Event from "../../Event/Event";
import "../Discover/Discover.css";
import "./MyEvents.css";

export default function MyEvents() {
  const { user, joinedEvents } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <h1>My Events</h1>
        <p>Please log in to view your joined events.</p>
      </div>
    );
  }

  return (
    <div className="Main">
      <div className="MyEventsContainer">
        <h1 className="Title">My Events</h1>
        <h2 className="SecondTitle">Joined Events: {joinedEvents.length}</h2>
        {joinedEvents.length === 0 ? (
          <div>
            <p>You haven't joined any events yet.</p>
            <p>
              Browse events in the Discover section and join events that
              interest you!
            </p>
          </div>
        ) : (
          <div className="EventsContainer">
            {joinedEvents.map((event) => (
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
                  titleClassName={event.titleClassName}
                  categoryClassName={event.categoryClassName}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
