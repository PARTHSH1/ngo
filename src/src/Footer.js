import React from 'react';
import './Footer.css'; // Add your own CSS file for custom styles
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h3 className="#about">ABOUT US</h3>
          <ul>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-section our-work">
          <h3>OUR WORK</h3>
          <ul>
            <li>Education</li>
            <li>Health</li>
            <li>Livelihood</li>
            <li>Women Empowerment</li>
            <li>Disaster Response</li>
          </ul>
        </div>

        <div className="footer-section campaigns">
          <h3>CAMPAIGNS</h3>
          <ul>
            <li>Shiksha Na Ruke</li>
            <li>Health Cannot Wait</li>
            <li>She Can Fly</li>
            <li>Swabhiman</li>
            <li>Tayyari Kal Ki</li>
          </ul>
        </div>

        <div className="footer-section get-involved">
          <h3>GET INVOLVED</h3>
          <ul>
            <li>Individual Support</li>
            <li>Corporate Partnerships</li>
            <li>Volunteer</li>
            <li>School Partnerships</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>CONTACT INFO</h3>
          <p>
            Parth Sharma Web Solutions<br/>
            4567 Cyber Hub, Tower B, Floor 10<br/>
            Connaught Place, New Delhi 110001<br/>
            India
          </p>
        </div>

        <div className="footer-section social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
