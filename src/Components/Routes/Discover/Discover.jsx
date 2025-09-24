import React, { useState, useMemo, useEffect } from "react";
import "./Discover.css";
import Search from "../../Search/Search";
import { events } from "../../Event/Events";
import Event from "../../Event/Event";

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState("Technology");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const categories = [
    { name: "All Categories", icon: "🌟", value: "all" },
    { name: "Technology", icon: "🖥️", value: "Technology" },
    { name: "Business", icon: "💼", value: "Business" },
    { name: "Photography", icon: "📸", value: "Photography" },
    { name: "Literature", icon: "📚", value: "Literature" },
    { name: "Health", icon: "🧘", value: "Health" },
    { name: "Sports", icon: "⚽", value: "Sports" },
    { name: "Music", icon: "🎶", value: "Music" },
    { name: "Art", icon: "🎨", value: "Art" },
    { name: "Fun", icon: "🎉", value: "Fun" },
    { name: "Night Life", icon: "🌙", value: "Night Life" },
  ];

  const regions = [
    "All Regions",
    "Tel Aviv",
    "Haifa",
    "Jerusalem",
    "North",
    "South",
    "Center",
    "Coastal",
    "Galilee",
    "Negev",
  ];

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredEvents = useMemo(() => {
    let filtered = events;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter((event) =>
        event.dateTimeLabel.includes(selectedDate)
      );
    }

    if (selectedRegion && selectedRegion !== "All Regions") {
      filtered = filtered.filter((event) =>
        event.location.toLowerCase().includes(selectedRegion.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery, selectedDate, selectedRegion]);

  const handleCategoryClick = (categoryValue) => {
    setSelectedCategory(categoryValue);
  };

  const handleCategoryClickFromEvent = (category) => {
    setSelectedCategory(category);
  };

  const eventsByCategory = useMemo(() => {
    const grouped = {};
    filteredEvents.forEach((event) => {
      if (!grouped[event.category]) {
        grouped[event.category] = [];
      }
      grouped[event.category].push(event);
    });
    return grouped;
  }, [filteredEvents]);

  return (
    <>
      <div className="Main">
        <Search
          onSearchChange={handleSearchChange}
          eventCount={filteredEvents.length}
        />
        <h1 className="Title">Discover Meetups</h1>
        <h2 className="SecondTitle">
          Find and join amazing events in your area
        </h2>
        <h2 className="MobileEventsFound FoundEventsHidden">
          {filteredEvents.length} events found
        </h2>
        <div className="FilterControls">
          <div className="FilterRow">
            <div className="FilterGroup">
              <label>Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="FilterInput"
              />
            </div>

            <div className="FilterGroup">
              <label>Region:</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="FilterSelect"
              >
                <option value="">All Regions</option>
                {regions.slice(1).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="ClearFilters"
              onClick={() => {
                setSelectedDate("");
                setSelectedRegion("");
                setSearchQuery("");
                const searchInput = document.querySelector(".SearchBox input");
                if (searchInput) searchInput.value = "";
              }}
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="Categories">
          {categories.map((category) => (
            <button
              key={category.value}
              className={selectedCategory === category.value ? "Active" : ""}
              onClick={() => handleCategoryClick(category.value)}
            >
              <span>{category.icon}</span> {category.name}
            </button>
          ))}
        </div>

        {Object.keys(eventsByCategory).length > 0 ? (
          Object.entries(eventsByCategory).map(([category, categoryEvents]) => (
            <div key={category}>
              <h1 className="Title">{category}</h1>
              <div className="Events">
                {categoryEvents.map((event) => (
                  <Event
                    key={event.id}
                    {...event}
                    onCategoryClick={handleCategoryClickFromEvent}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="NoEvent">
            <h2>No events found matching your criteria</h2>
            <p>Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </>
  );
}
