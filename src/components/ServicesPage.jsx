import React from "react";

export default function ServicesPage() {
  const services = [
    { name: "Plumbing", description: "Expert plumbers for all types of repairs and installations." },
    { name: "Electrician", description: "Certified electricians for wiring, repairs, and lighting." },
    { name: "Cleaning", description: "Home and office cleaning professionals." },
    { name: "Tutoring", description: "Find tutors for any subject or skill level." },
  ];

  return (
    <section className="section">
      <div className="container text-center">
        <h2>Our Services</h2>
        <div className="grid">
          {services.map((service, i) => (
            <div key={i} className="card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
