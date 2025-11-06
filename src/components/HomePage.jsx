import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1>Welcome to SkillConnect</h1>
        <p>
          A platform connecting skilled professionals with users who need
          trusted services. Find experts near you or offer your professional
          services with ease.
        </p>
        <Link to="/services" className="hero-btn">
          Explore Services
        </Link>
      </div>
    </section>
  );
}
