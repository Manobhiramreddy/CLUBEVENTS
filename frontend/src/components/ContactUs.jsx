import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
        <div>
            <h1>Contact <span>Us</span></h1>
        </div>
      {/* Google Maps Section */}
      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7614.651491359479!2d78.31299828959537!3d17.396148186916015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738429066673!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <h3>Get in <span>Touch</span></h3>
        <div className="contact-details">
          <p>
            <strong>Address:</strong> Chaitanya Bharathi Institute Of Technology, Gandipet, Hyderabad, Telangana - 500075
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@collegeemail.com">info@collegeemail.com</a>
          </p>
          <p>
            <strong>Call:</strong> <a href="tel:+918765432100">+91 8765432100</a>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <h3>College Name</h3>
          <p>Chaitanya Bharathi Institute Of Technology</p>
          <p>Gandipet, Hyderabad, Telangana - 500075</p>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            {/* Replace '#' with actual links to social media handles */}
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <p>&copy; CBIT 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
