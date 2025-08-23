import "./Navbar.css"; // correct path if CSS is in the same folder
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // make sure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
