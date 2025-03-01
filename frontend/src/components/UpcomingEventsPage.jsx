import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UpcomingEventsPage.css";

const events = [
  {
    id: 1,
    name: "Web Development Workshop",
    poster: "images/cccevent.png",
    clubLogo: "images/ccclogo.png",
    deadline: "February 15, 2025, 11:59 PM IST",
    date: "February 20, 2025",
    venue: "Auditorium Hall A",
    googleFormLink: "https://forms.google.com/web-dev-registration",
    route: "/web-dev-event",
  },
  {
    id: 2,
    name: "Full Stack Bootcamp",
    poster: "images/cccevent.png",
    clubLogo: "images/satarc.png",
    deadline: "February 18, 2025, 11:59 PM IST",
    date: "February 25, 2025",
    venue: "Lab Room B2",
    googleFormLink: "https://forms.google.com/full-stack-registration",
    route: "/full-stack-event",
  },
  {
    id: 3,
    name: "Data Science Meetup",
    poster: "images/cccevent.png",
    clubLogo: "images/ccclogo.png",
    deadline: "February 22, 2025, 11:59 PM IST",
    date: "March 1, 2025",
    venue: "Conference Room C1",
    googleFormLink: "https://forms.google.com/data-science-registration",
    route: "/data-science-event",
  },
];

const UpcomingEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="events-container">
      <input
        type="text"
        placeholder="Search Events..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => navigate(event.route)}
          >
            {/* Event Poster */}
            <img src={event.poster} alt={event.name} className="event-poster" />

            {/* Event Info */}
            <div className="event-info">
              <h3 className="event-name">{event.name}</h3>
              <img src={event.clubLogo} alt="Club Logo" className="club-logo" />
              <p className="deadline">Deadline: {event.deadline}</p>
              <a
                href={event.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Register
              </a>
            </div>

            {/* Event Date and Venue */}
            <div className="event-details">
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
