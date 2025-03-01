import React from "react";
import "../styles/EventDetails.css";

const EventDetails = () => {
  return (
    <div className="conference-details">
      {/* Left Section */}
      <div className="conference-left">
        <button className="watch-btn">Watch On-Demand</button>
      </div>

      {/* Center Section */}
      <div className="conference-center">
        <p className="webinar-title">TECH HIVE WEBINAR</p>
        <h2>Inside Neural Networks: A Deep Dive</h2>
      </div>

      {/* Right Section */}
      <div className="conference-right">
        <img src="/src/images/pk.png" alt="Speaker" className="speaker-image" />
        <div>
          <h3>Jack McCauley</h3>
          <p>Innovator-in-Residence, Berkeley University<br />Co-founder, Oculus</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
