import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ClubsPage.css";

const clubs = [
  { name: "Web Development (Basic)", logo: "/images/satarc.png", route: "/web-dev" },
  { name: "Full Stack Web-Development", logo: "images/CCCLogo.png", route: "/full-stack" },
  { name: "Data Science", logo: "images/image.png", route: "/data-science" },
  { name: "Cybersecurity", logo: "images/ccclogo.png", route: "/cybersecurity" },
  { name: "AI & ML", logo: "images/satarc.png", route: "/ai-ml" },
  { name: "Blockchain", logo: "images/ccclogo.png", route: "/blockchain" },
];

const ClubsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="clubs-container">
      <input
        type="text"
        placeholder="Search Clubs..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="clubs-grid">
        {filteredClubs.map((club, index) => (
          <div
            key={index}
            className="club-card"
            onClick={() => navigate(club.route)}
          >
            <img src={club.logo} alt={club.name} className="club-logos" />
            <div className="club-info">
              <h3 className="club-name">{club.name}</h3>
              <button className="club-button">Apply to {club.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubsPage;
