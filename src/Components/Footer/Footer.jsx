import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-about">
          <h2 className="footer-logo">🚌 BusBooking</h2>
          <p>Book your bus tickets online with ease. Safe, reliable, and fast journeys across India.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/buses">Book Tickets</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 78158 27400</p>
          <p>✉ pavan@busbooking.com</p>
          <div className="footer-social">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BusBooking. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
