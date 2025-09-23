import React, { useContext } from "react";
import { UserContext } from "../User/UserContext";

export default function UpcomingEvents() {
  const { user, userEvents, loading, removeEvent } = useContext(UserContext);

  const handleRemoveEvent = async (eventId) => {
    const result = await removeEvent(eventId);
    if (!result.success) {
      alert("Error removing event: " + result.error);
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
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

  if (!user) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Upcoming Events</h1>
        <p>Please sign in to view your upcoming events.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Upcoming Events</h1>
        <p>Loading your events...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Upcoming Events</h1>

      {userEvents.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '12px' }}>
          <p>You haven't joined any events yet.</p>
          <p>Browse events in the Discover section to join some!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {userEvents.map((event) => (
            <div key={event.id} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #e9ecef' }}>
                <h3 style={{ margin: 0, color: '#333' }}>{event.title}</h3>
                <button
                  onClick={() => handleRemoveEvent(event.id)}
                  style={{
                    background: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                  title="Remove from upcoming events"
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '24px' }}>{event.icon}</span>
                  <span style={{ background: '#4318d1', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>
                    {event.category}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ margin: 0, color: '#333', fontWeight: 'bold' }}>{event.name}</p>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>📅 {formatDate(event.dateTimeLabel)}</p>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>📍 {event.location}</p>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>👀 {event.views} views</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #4318d1' }}>
                  <p style={{ margin: 0, color: '#555', lineHeight: 1.5 }}>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
