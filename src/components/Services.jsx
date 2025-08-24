import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and secure websites using the latest technologies like React, Node.js, and Next.js.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform and native apps for Android and iOS with seamless user experience.",
      icon: "📱",
    },
    {
      title: "Data Engineering",
      description:
        "Designing and managing large-scale data pipelines, ETL workflows, and cloud-based data solutions.",
      icon: "📊",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Delivering AI solutions including predictive modeling, machine learning, and intelligent automation.",
      icon: "🤖",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing modern, user-friendly, and visually appealing interfaces that keep your users engaged.",
      icon: "🎨",
    },
    {
      title: "Cloud Services",
      description:
        "Deploying scalable and secure applications with AWS, Azure, and Google Cloud.",
      icon: "☁️",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <p className="services-subtext">
        With a global team of <strong>100+ freelance engineers</strong>, we are
        proudly serving clients across the world with reliable, scalable, and
        innovative solutions.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
