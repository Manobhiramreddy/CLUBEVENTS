import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import EventDetails from "./components/EventDetails";
import CountdownTimer from "./components/CountdownTimer";
import StatisticsSection from "./components/StatisticsSection";
import SponsorsSection from "./components/SponsorsSection";
import ContactUs from "./components/ContactUs";
import ImportantDates from "./components/IEEEImportantDates";
import HeroSection from "./components/HeroSection";
import MeetTheTeam from "./components/MeetTheTeam"; // Import MeetTheTeam component
import MagicCursor from "./components/MagicCursor";
import ClubsPage from "./components/ClubsPage";
import UpcomingEventsPage from "./components/UpcomingEventsPage";
import "./App.css";

const App = () => {
  return (
    <>
      <MagicCursor />
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div className="app">
              <EventDetails />
              <HeroSection />
              <CountdownTimer />
              <StatisticsSection />
              <ImportantDates />
              <SponsorsSection />
              <ContactUs />
            </div>
          }
        />

        {/* Meet the Team Route */}
        <Route path="/meettheteam" element={<MeetTheTeam />} />
        <Route path="/clubsPage" element={<ClubsPage />} />
        <Route path="/upcomingeventspage" element={<UpcomingEventsPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </>
  );
};

export default App;
