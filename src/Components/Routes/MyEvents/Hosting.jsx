import { useState, useContext } from "react";
import { events } from "../../Event/Events";
import { UserContext } from "../User/UserContext";
import Search from "../../Search/Search";
import Event from "../../Event/Event";
import "../Discover/Discover.css";
import "./MyEvents.css";

export default function Hosting() {
  const { user, createEvent, joinedEvents } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState("Technology");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const categories = [
    { name: "Technology", icon: "💻", value: "Technology" },
    { name: "Photography", icon: "📸", value: "Photography" },
    { name: "Business", icon: "💼", value: "Business" },
    { name: "Music", icon: "🎵", value: "Music" },
    { name: "Sports", icon: "⚽", value: "Sports" },
    { name: "Literature", icon: "📚", value: "Literature" },
    { name: "Health", icon: "🧘", value: "Health" },
    { name: "Fun", icon: "🎉", value: "Fun" },
    { name: "Night Life", icon: "🌙", value: "Night Life" },
  ];

  const handleCategorySelect = (categoryValue) => {
    setSelectedCategory(categoryValue);
  };

  // Get events created by the user
  const createdEvents = joinedEvents.filter(event => event.isCreator);

  // Helper function to generate titleClassName from category
  const getTitleClassName = (category, existingClassName) => {
    if (existingClassName) return existingClassName;

    const categoryMap = {
      Technology: "Tech",
      Photography: "Photo",
      Sports: "Sport",
      Business: "Business",
      Health: "Health",
      Music: "Music",
      Art: "Art",
      Fun: "Fun",
      "Night Life": "NightLife",
    };
    return categoryMap[category] || "Tech";
  };

  // Helper function to generate categoryClassName from category
  const getCategoryClassName = (category, existingClassName) => {
    if (existingClassName) return existingClassName;
    return `${category.replace(/\s+/g, "")}Category`;
  };

  const isFormValid = () => {
    return (
      selectedCategory &&
      eventTitle.trim() !== "" &&
      eventDescription.trim() !== "" &&
      eventDate !== "" &&
      eventLocation.trim() !== ""
    );
  };

  const handleCreateEvent = async () => {
    // Check if user is signed in
    if (!user) {
      alert(
        "You must be signed in to create an event. Please sign up or log in first."
      );
      return;
    }

    if (!isFormValid()) {
      alert("Please fill in all required fields");
      return;
    }

    // Generate unique ID
    const newEventId = `custom-${Date.now()}`;

    // Create new event object
    const newEvent = {
      id: newEventId,
      title: eventTitle,
      category: selectedCategory,
      icon:
        categories.find((cat) => cat.value === selectedCategory)?.icon || "🌟",
      views: 0,
      name: eventTitle,
      dateTimeLabel: eventDate,
      location: eventLocation,
      description: eventDescription,
      titleClassName: selectedCategory.replace(/\s+/g, ""),
      categoryClassName: `${selectedCategory.replace(/\s+/g, "")}Category`,
    };

    // Add to events array
    events.push(newEvent);

    // Save to user's hosted events
    const success = await createEvent(newEvent);

    if (success) {
      // Reset form
      setEventTitle("");
      setEventDescription("");
      setEventDate("");
      setEventLocation("");
      setSelectedCategory("Technology");

      alert("Event created successfully!");
    } else {
      alert("Failed to save event. Please try again.");
    }
  };

  return (
    <>
      <div className="Main">
        <h1 className="Title">Host an Event</h1>
        <h2 className="SecondTitle">
          Create and share your event with the community
        </h2>
        <div className="HostingContainer">
          <div className="Hosting">
            <h3>Event Category *</h3>
            <div className="HostingCategories">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`HostingCategory ${
                    selectedCategory === category.value ? "HostingActive" : ""
                  }`}
                  onClick={() => handleCategorySelect(category.value)}
                >
                  <span>{category.icon}</span> {category.name}
                </button>
              ))}
            </div>
            <h3>Event Title *</h3>
            <input
              className="HostingTitle"
              placeholder="Enter your event title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <h3>Event Description *</h3>
            <textarea
              className="HostingDescription"
              placeholder="Enter your event description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <div className="DateAndLocation">
              <div className="Date">
                <h3>Event Date & Time *</h3>
                <input
                  className="HostingDate"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
              <div className="Location">
                <h3>Location *</h3>
                <input
                  className="HostingLocation"
                  placeholder="Enter venue name or address"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                />
              </div>
            </div>
            <button
              className="CreateEvent"
              onClick={handleCreateEvent}
              disabled={!isFormValid() || !user}
              style={{
                opacity: isFormValid() && user ? 1 : 0.5,
                cursor: isFormValid() && user ? "pointer" : "not-allowed",
              }}
            >
              Create Event
            </button>
          </div>
        </div>

        {/* Created Events Section */}
        {user && (
          <div className="MyEventsContainer">
            <h1 className="Title">Your Created Events</h1>
            <h2 className="SecondTitle">Events Created: {createdEvents.length}</h2>
            {createdEvents.length === 0 ? (
              <div className="NoCreatedEvents">
                <h2>You haven't created any events yet.</h2>
                <p>Use the form above to create your first event!</p>
              </div>
            ) : (
              <div className="EventsContainer">
                {createdEvents.map((event) => (
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
                      titleClassName={getTitleClassName(
                        event.category,
                        event.titleClassName
                      )}
                      categoryClassName={getCategoryClassName(
                        event.category,
                        event.categoryClassName
                      )}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
