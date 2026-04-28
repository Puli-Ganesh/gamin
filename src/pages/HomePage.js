import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="gaming-homepage">
      <Navbar />

      <main className="gaming-homepage-main">

        <section className="gaming-grid-section">
          <div className="gaming-grid-layout">
            <div className="gaming-grid-content-card">
              <div className="gaming-grid-content-inner">
                <span className="gaming-grid-kicker">Next Play</span>
                <h2>Built for Players Who Chase the Win</h2>
                <p>
                  Dive into bold gaming worlds, powerful visuals, and action-ready experiences made to keep every player engaged from the first move.
                </p>
                <button type="button" className="gaming-grid-btn" onClick={goToContact}>
                  Explore Now
                </button>
              </div>
            </div>

            <div className="gaming-grid-split-card">
              <div className="gaming-grid-plain" />
              <div className="gaming-grid-image-card">
                <img src="/images/grid1.avif" alt="Gaming grid one" />
              </div>
            </div>

            <div className="gaming-grid-split-card">
              <div className="gaming-grid-image-card">
                <img src="/images/grid2.avif" alt="Gaming grid two" />
              </div>
              <div className="gaming-grid-plain" />
            </div>

            <div className="gaming-grid-full-image-card">
              <img src="/images/grid3.avif" alt="Gaming grid three" />
            </div>
          </div>
        </section>

        <section className="gaming-intro-section">
          <div className="gaming-intro-grid-bg">
            <span className="gaming-intro-line gaming-intro-line-one" />
            <span className="gaming-intro-line gaming-intro-line-two" />
            <span className="gaming-intro-line gaming-intro-line-three" />
          </div>

          <div className="gaming-orbit gaming-orbit-one" />
          <div className="gaming-orbit gaming-orbit-two" />

          <div className="gaming-intro-content">
            <span className="gaming-intro-kicker">Welcome to the Arena</span>

            <h1>Immerse in Fun Games by GAMES SOFT</h1>

            <div className="gaming-intro-bottom">
              <p>
                Step into a world built for players who love speed, style and excitement.
                Discover thrilling gaming experiences crafted with energy and imagination.
              </p>

              <button
                type="button"
                className="gaming-explore-btn"
                onClick={() => navigate("/contact")}
              >
                Explore Now
              </button>
            </div>
          </div>
        </section>

        <section className="gaming-showcase-section">
          <div className="gaming-showcase-header">
            <span>Featured Worlds</span>
            <h2>Playful visuals made for a bold gaming experience</h2>
          </div>

          <div className="gaming-showcase-grid">
            <div className="gaming-showcase-card">
              <div className="gaming-showcase-image-wrap">
                <img
                  src="/images/part1.png"
                  alt="Gaming showcase one"
                  className="gaming-showcase-image"
                />
              </div>
              <div className="gaming-showcase-card-content">
                <h3>Arcade Energy</h3>
                <p>Fast, bright and packed with motion for players who enjoy every second.</p>
              </div>
            </div>

            <div className="gaming-showcase-card">
              <div className="gaming-showcase-image-wrap">
                <img
                  src="/images/part2.avif"
                  alt="Gaming showcase two"
                  className="gaming-showcase-image"
                />
              </div>
              <div className="gaming-showcase-card-content">
                <h3>Next Level Play</h3>
                <p>A sharp visual section ready to highlight your games, events or features.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;