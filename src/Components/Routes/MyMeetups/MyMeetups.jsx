import React, { useContext } from "react";
import { UserContext } from "../User/UserContext";
import Event from "../../Event/Event";
import "./MyMeetups.css";

export default function MyMeetups() {
  const { user, joinedEvents } = useContext(UserContext);

  if (!user) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>My Meetups</h1>
        <p>Please log in to view your joined events.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Meetups</h1>
      <h2>Joined Events ({joinedEvents.length})</h2>
      
      {joinedEvents.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <p style={{ fontSize: '18px', color: '#666' }}>
            You haven't joined any events yet.
          </p>
          <p style={{ color: '#999' }}>
            Browse events in the Discover section and join events that interest you!
          </p>
        </div>
      ) : (
        <div className="events-container">
          {joinedEvents.map((event) => (
            <div key={event.id} className="event-card">
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
                titleClassName="EventTitle"
                categoryClassName="Category"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
