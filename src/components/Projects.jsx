import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot built using NLP and machine learning.",
    image: "https://source.unsplash.com/400x250/?ai,chatbot",
  },
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with integrated payment gateway.",
    image: "https://source.unsplash.com/400x250/?ecommerce,website",
  },
  {
    title: "Healthcare Dashboard",
    description: "Data visualization and analytics for patient management.",
    image: "https://source.unsplash.com/400x250/?healthcare,dashboard",
  },
  {
    title: "Banking App",
    description: "A secure mobile banking application with biometric login.",
    image: "https://source.unsplash.com/400x250/?banking,app",
  },
  {
    title: "Blockchain Platform",
    description: "A decentralized platform for secure transactions.",
    image: "https://source.unsplash.com/400x250/?blockchain,crypto",
  },
  {
    title: "Travel Booking System",
    description: "Online platform to book flights, hotels, and tours.",
    image: "https://source.unsplash.com/400x250/?travel,booking",
  },
  {
    title: "Learning Management System",
    description: "A digital platform for online courses and certifications.",
    image: "https://source.unsplash.com/400x250/?education,lms",
  },
  {
    title: "Restaurant Ordering App",
    description: "Food delivery and dine-in reservation app.",
    image: "https://source.unsplash.com/400x250/?restaurant,food",
  },
  {
    title: "Smart Home IoT",
    description: "IoT-based smart home automation system.",
    image: "https://source.unsplash.com/400x250/?iot,smarthome",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather updates with AI predictions.",
    image: "https://source.unsplash.com/400x250/?weather,forecast",
  },
  {
    title: "Online Exam Portal",
    description: "Secure online examination system with proctoring.",
    image: "https://source.unsplash.com/400x250/?exam,online",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app to track workouts and health stats.",
    image: "https://source.unsplash.com/400x250/?fitness,health",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing work and skills.",
    image: "https://source.unsplash.com/400x250/?portfolio,website",
  },
  {
    title: "Event Management System",
    description: "Platform to manage and organize large events.",
    image: "https://source.unsplash.com/400x250/?event,management",
  },
  {
    title: "Job Portal",
    description: "A recruitment platform connecting job seekers and employers.",
    image: "https://source.unsplash.com/400x250/?jobs,career",
  },
  {
    title: "Social Media App",
    description: "An engaging platform for networking and communication.",
    image: "https://source.unsplash.com/400x250/?socialmedia,app",
  },
  {
    title: "Music Streaming App",
    description: "Listen to unlimited songs and podcasts with AI recommendations.",
    image: "https://source.unsplash.com/400x250/?music,app",
  },
  {
    title: "News Aggregator",
    description: "Latest global news collected from multiple sources.",
    image: "https://source.unsplash.com/400x250/?news,media",
  },
  {
    title: "Virtual Reality Game",
    description: "Immersive VR gaming experience with 3D graphics.",
    image: "https://source.unsplash.com/400x250/?virtualreality,game",
  },
  {
    title: "Digital Marketing Dashboard",
    description: "Analytics platform to track marketing campaign performance.",
    image: "https://source.unsplash.com/400x250/?marketing,analytics",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>
      <p className="projects-subtitle">
        Explore some of the innovative projects we have delivered across industries.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
