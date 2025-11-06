import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Contact Us</h2>

        {submitted ? (
          <p className="text-center success-text">
            Thank you for reaching out! We’ll contact you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="form-card">
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="hero-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
