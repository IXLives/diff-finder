import React from 'react';
import './Contact.css'; // Import the Contact-specific CSS

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-header">Contact Me</h2>
      <ul className="contact-info-list">
        <li className="contact-info-item">
          <span className="info-label">Location:</span> Atlanta
        </li>
        <li className="contact-info-item">
          <span className="info-label">Phone:</span> 470 349 9040
        </li>
        <li className="contact-info-item">
          <span className="info-label">Email:</span> bryant.ian87@gmail.com
        </li>
      </ul>
    </div>
  );
}

export default Contact;
