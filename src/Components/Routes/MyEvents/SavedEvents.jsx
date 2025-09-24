import React, { useContext } from "react";
import { UserContext } from "../User/UserContext";
import Event from "../../Event/Event";
import "../Discover/Discover.css";
import "./MyEvents.css";  

export default function SavedEvents() {
  const { user, savedEvents } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <h1>Saved Events</h1>
        <p>Please log in to view your saved events.</p>
      </div>
    );
  }

  return (
    <div className="Main">
      <div className="MyEventsContainer">
        <h1 className="Title">Saved Events</h1>
        <h2 className="SecondTitle">Saved Events: {savedEvents.length}</h2>
        {savedEvents.length === 0 ? (
          <div>
            <p>You have no saved events yet.</p>
            <p>Browse events in the Discover section and save events that interest you!</p>
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
