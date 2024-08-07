// src/ContactForm.js

import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First name" required /><br></br>
            <input type="text" name="lastName" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Let's talk about everything.</h3>
        <p>We believe in the power of communication and collaboration. Whether you have a suggestion to improve our platform, a partnership proposal, or just want to learn more about AgriMitra, we're here to listen and engage.</p>

        <p>For more information about our services and how we can assist you, feel free to browse our website or reach out to us directly.</p>

        <p>Thank you for choosing AgriMitra, your trusted partner in modern farming solutions.</p>
       
      </div>
    </div>
  );
};

export default ContactUs;
