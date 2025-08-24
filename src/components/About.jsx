import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>
            At <strong>Your Company Name</strong>, we empower businesses worldwide 
            with innovative technology solutions that drive growth and efficiency.
          </p>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
            alt="Team Collaboration" 
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded with a vision to bring top-notch digital solutions to businesses around the world, 
          we have grown into a team of over <strong>100 freelance engineers</strong> delivering 
          high-quality projects across multiple industries.
        </p>
        <div className="story-image">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
            alt="Our Story"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <div className="value-cards">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace creativity and provide innovative solutions tailored to clients' needs.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We deliver high-quality results on time and exceed expectations.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We believe in teamwork and work closely with clients to achieve goals.</p>
          </div>
          <div className="value-card">
            <h3>Global Impact</h3>
            <p>We serve clients across the world and aim to make a positive difference.</p>
          </div>
        </div>
      </section>

      {/* Our Team & Stats */}
      <section className="about-team">
        <div className="team-image">
          <img 
            src="https://static3.bigstockphoto.com/3/0/2/large1500/20339648.jpg" 
            alt="Global Team" 
          />
        </div>
        <div className="team-text">
          <h2>Our Team & Global Reach</h2>
          <p>
            Our team of <strong>100+ engineers</strong> works across multiple domains, 
            serving clients in <strong>over 20 countries</strong>. We deliver reliable, 
            scalable, and innovative solutions that transform businesses.
          </p>
          <div className="team-stats">
            <div>
              <h3>100+</h3>
              <p>Engineers</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>Countries Served</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="about-clients">
        <h2>Our Clients</h2>
        <p>We serve multiple clients across industries, helping them achieve business excellence through technology and innovation.</p>
        <div className="client-logos">
          <img src="https://via.placeholder.com/150x80?text=Client+1" alt="Client 1" />
          <img src="https://via.placeholder.com/150x80?text=Client+2" alt="Client 2" />
          <img src="https://via.placeholder.com/150x80?text=Client+3" alt="Client 3" />
          <img src="https://via.placeholder.com/150x80?text=Client+4" alt="Client 4" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to Transform Your Business?</h2>
        <p>Partner with us to leverage the power of technology and innovation. Let’s build solutions that deliver real results.</p>
        <button className="cta-btn">Get in Touch</button>
      </section>
    </div>
  );
}

export default About;
