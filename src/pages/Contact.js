import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";

function Contact() {
  const mapLink = "https://maps.google.com/?q=17.737467,83.305840";
  const mapEmbed = "https://maps.google.com/maps?q=17.737467,83.305840&z=16&output=embed";

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-main">
        <section className="contact-hero-section">
          <div className="contact-hero-grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="contact-hero-orb contact-hero-orb-one" />
          <div className="contact-hero-orb contact-hero-orb-two" />

          <div className="contact-hero-content">
            <span className="contact-kicker">Contact Games Soft</span>
            <h1>Let’s Power Up Your Next Gaming Idea</h1>
            <p>
              Connect with us for gaming projects, creative website experiences, collaborations, support,
              or custom digital ideas built with bold visuals and smooth interaction.
            </p>

            <div className="contact-hero-actions">
              <a href={mapLink} target="_blank" rel="noreferrer" className="contact-primary-btn">
                View Location
              </a>
              <a href="mailto:support@gamessoft.com" className="contact-secondary-btn">
                Send Email
              </a>
            </div>
          </div>
        </section>

        <section className="contact-details-section">
          <div className="contact-details-intro">
            <span>Reach Us</span>
            <h2>We Are Always Ready for the Next Mission</h2>
            <p>
              Whether you are planning a new game, upgrading your gaming website, or exploring a creative
              digital concept, our team is ready to talk.
            </p>
          </div>

          <div className="contact-details-grid">
            <div className="contact-detail-card">
              <div className="contact-detail-icon">01</div>
              <h3>Email</h3>
              <p>support@gamessoft.com</p>
              <a href="mailto:support@gamessoft.com">Mail Us</a>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">02</div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
              <a href="tel:+919876543210">Call Now</a>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">03</div>
              <h3>Location</h3>
              <p>Visakhapatnam, Andhra Pradesh</p>
              <a href={mapLink} target="_blank" rel="noreferrer">
                Open Map
              </a>
            </div>
          </div>
        </section>

        <section className="contact-map-section">
          <div className="contact-map-content">
            <span>Office Location</span>
            <h2>Find Our Gaming Hub</h2>
            <p>
              Visit our office location using Google Maps. The map below points to the exact location,
              making it easy to navigate from anywhere.
            </p>

            <div className="contact-location-meta">
              <div>
                <strong>Coordinates</strong>
                <span>17.737467, 83.305840</span>
              </div>

              <div>
                <strong>Region</strong>
                <span>Visakhapatnam</span>
              </div>
            </div>

            <a href={mapLink} target="_blank" rel="noreferrer" className="contact-map-button">
              Open in Google Maps
            </a>
          </div>

          <div className="contact-map-frame">
            <iframe
              title="Games Soft Office Location"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="contact-final-section">
          <div className="contact-final-card">
            <span>Ready to Begin?</span>
            <h2>Your Next Gaming Experience Starts Here</h2>
            <p>
              Share your idea, visit our location, or connect with us directly. Games Soft is ready to help
              turn your concept into a polished gaming experience.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Contact;