import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or would like to schedule an appointment, please reach out to us:</p>
        
        <div className="contact-details">
          <h2>Email Us</h2>
          <p>info@spcsclinic.com</p>
          
          <h2>Call Us</h2>
          <p>(123) 456-7890</p>

          <h2>Visit Us</h2>
          <p>123 Main Street, Calgary, AB</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
