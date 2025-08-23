import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", // Slide 0: AI
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80", // Slide 1: ML
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80", // Slide 2: Data Engineering
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80", // Slide 7: Graphs and Metrics
  ];
  

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Slider Section */}
      <div className="slider">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
        <div className="dots">
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active-dot" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Businesses with Technology</h1>
          <p>
            We provide cutting-edge solutions in Website Development, AI/ML,
            Data Engineering, and Business Analysis to help your business grow
            and innovate.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a4"
            alt="Technology"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Web Development"
            />
            <h3>Website Development</h3>
            <p>
              Professional, responsive, and scalable websites tailored to your
              business needs.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f3d1f"
              alt="AI/ML"
            />
            <h3>AI / Machine Learning</h3>
            <p>
              Intelligent solutions powered by data-driven AI and ML models.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Data Engineering"
            />
            <h3>Data Engineering</h3>
            <p>
              Robust pipelines and infrastructure to make your data work for
              you.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Business Analysis"
            />
            <h3>Business Analysis</h3>
            <p>
              Transform insights into strategy with expert business analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-contact">
            <div>
              <h4>Email</h4>
              <p>contact@yourcompany.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="footer-right">
            <p> Digital Transformation Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
