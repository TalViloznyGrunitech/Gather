import React, { useContext, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { UserContext } from "../User/UserContext";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

export default function Calendar() {
  const { user, joinedEvents } = useContext(UserContext);
  const navigate = useNavigate();

 
  const getCategoryColor = (category) => {
    const colors = {
      'Technology': '#3b82f6', 
      'Photography': '#8b5cf6', 
      'Sports': '#10b981', 
      'Business': '#f59e0b', 
      'Health': '#ef4444', 
      'Music': '#ec4899', 
      'Art': '#06b6d4', 
      'Fun': '#84cc16', 
      'Night Life': '#6366f1'
    };
    return colors[category] || '#6b7280';
  };

  
  const calendarEvents = useMemo(() => {
    if (!joinedEvents || joinedEvents.length === 0) {
      return [];
    }

    return joinedEvents.map((event) => {
      try {
       
        const dateTimeMatch = event.dateTimeLabel.match(/(\d{4}-\d{2}-\d{2})\s+at\s+(\d{1,2}):(\d{2})\s+(AM|PM)/);
        
        if (!dateTimeMatch) {
          console.warn("Could not parse date for event:", event.title, event.dateTimeLabel);
          return null;
        }

        const [, dateStr, hourStr, minuteStr, ampm] = dateTimeMatch;
        let hour = parseInt(hourStr);
        const minute = parseInt(minuteStr);

      
        if (ampm === 'PM' && hour !== 12) {
          hour += 12;
        } else if (ampm === 'AM' && hour === 12) {
          hour = 0;
        }

       
        const eventDate = new Date(dateStr);
        eventDate.setHours(hour, minute, 0, 0);
        
        return {
          id: event.id,
          title: event.title,
          date: eventDate.toISOString().split('T')[0], // YYYY-MM-DD format
          start: eventDate.toISOString(),
          backgroundColor: getCategoryColor(event.category),
          borderColor: getCategoryColor(event.category),
          textColor: '#ffffff',
          extendedProps: {
            category: event.category,
            location: event.location,
            description: event.description,
            icon: event.icon,
            name: event.name
          }
        };
      } catch (error) {
        console.error("Error processing event:", event, error);
        return null;
      }
    }).filter(Boolean); 
  }, [joinedEvents]);


  const handleEventClick = (clickInfo) => {
    const eventId = clickInfo.event.id;
    const eventTitle = clickInfo.event.title;
    console.log('Event clicked:', eventId, eventTitle);
    
   
    let eventData = null;
    
    if (eventId.startsWith('test-event')) {
     
      eventData = {
        id: eventId,
        title: eventTitle,
        category: eventId === 'test-event-1' ? 'Technology' : 'Sports',
        icon: eventId === 'test-event-1' ? '💻' : '⚽',
        views: 50,
        name: eventTitle,
        dateTimeLabel: eventId === 'test-event-1' ? '2024-01-15 at 2:00 PM' : '2024-01-20 at 10:00 AM',
        location: eventId === 'test-event-1' ? 'Tech Hub' : 'Sports Center',
        description: eventId === 'test-event-1' 
          ? 'A test technology event to demonstrate calendar functionality.' 
          : 'A test sports event to show how calendar events work.',
        titleClassName: eventId === 'test-event-1' ? 'Tech' : 'Sport',
        categoryClassName: eventId === 'test-event-1' ? 'TechnologyCategory' : 'SportsCategory',
      };
    } else {
     
      eventData = joinedEvents.find(event => event.id === eventId);
    }
    
    if (eventData) {
      navigate(`/Gather/EventProfile/${eventId}`, { state: { eventData } });
    } else {
      console.error('Event data not found for:', eventId);
      alert('Event data not found. Please try again.');
    }
  };

 
  const handleDateClick = (arg) => {
    console.log('Date clicked:', arg.dateStr);
 
  };

  if (!user) {
    return (
      <div className="Main">
        <div className="CalendarContainer">
          <h1>Calendar</h1>
          <p>Please log in to view your events calendar.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="Main">
        <div className="CalendarContainer">
          <h1>My Events Calendar</h1>
          <p>You have {joinedEvents.length} joined events</p>
          
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[
              { id: 'test-event-1', title: 'Test Event 1', date: '2024-01-15', backgroundColor: '#3b82f6' },
              { id: 'test-event-2', title: 'Test Event 2', date: '2024-01-20', backgroundColor: '#10b981' },
              ...calendarEvents
            ]}
            eventClick={handleEventClick}
            dateClick={handleDateClick}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek'
            }}
            height="auto"
            eventDisplay="block"
            dayMaxEvents={3}
            moreLinkClick="popover"
          />
        </div>
      </div>
    </>
  );
}
