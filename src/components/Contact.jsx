import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-container">
        
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Name:</strong> Alka Pal</p>
          <p><strong>Address:</strong> 569 CH/275 Prem Nagar, Alambagh, Lucknow 226005</p>
          <p><strong>Phone:</strong> <a href="tel:+919151338489">+91 9151338489</a></p>
          <p><strong>Email:</strong> <a href="mailto:alkapal45@gmail.com">alkapal45@gmail.com</a></p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Leave a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
