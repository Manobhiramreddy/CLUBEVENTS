import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Default styles for all pages
import "../styles/HomeNavbar.css"; // Specific styles for the home page

const Navbar = () => {
  const location = useLocation();

  // Determine if the user is on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`navbar ${isHomePage ? "home-navbar" : ""}`}>
      <div className={`navbar-left ${isHomePage ? "home-navbar-left" : ""}`}>
        <img src="/images/ccc.png" alt="IEEE Logo" className="navbar-logo zoom-animation" />
        <img src="images/cbit.png" alt="CBIT Logo" className="navbar-logo zoom-animation" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="#about">About Us</Link>
          <ul className="dropdown-menu">
            <li><a href="https://www.cbit.ac.in" target="_blank" rel="noopener noreferrer">About CBIT</a></li>
            <li><a href="https://www.cbit.ac.in/academic_post/department-of-information-technology/" target="_blank" rel="noopener noreferrer">About IT</a></li>
            <li><Link to="/meettheteam">Meet the Dev Team</Link></li>
          </ul>
        </li>
        <li><Link to="/clubsPage">Clubs</Link></li>
        <li><Link to="/upcomingeventspage">Upcoming Events</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
      <div className="navbar-right">
        <button className="submit-button">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
