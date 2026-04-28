import React from "react";
import Navbar from "./Navbar";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">
        <section className="about-hero-section">
          <div className="about-hero-bg">
            <img src="/images/about-hero.jpg" alt="About Games Soft" />
          </div>

          <div className="about-hero-overlay" />

          <div className="about-hero-content">
            <span className="about-tag">About Games Soft</span>
            <h1>We Build Gaming Worlds That Feel Alive</h1>
            <p>
              Games Soft is built for players who love speed, creativity, challenge, and immersive digital experiences.
              Our focus is simple, create games that are fun to play, easy to explore, and exciting to return to.
            </p>
          </div>
        </section>

        <section className="about-story-section">
          <div className="about-story-left">
            <span>Our Story</span>
            <h2>Started With Passion, Built for Players</h2>
          </div>

          <div className="about-story-right">
            <p>
              Games Soft began with one clear idea, gaming should feel exciting from the first second.
              Every design, animation, sound, character, and level should pull the player deeper into the experience.
            </p>
            <p>
              We create digital spaces where casual players, competitive gamers, and game lovers can enjoy smooth,
              energetic, and memorable gameplay.
            </p>
          </div>
        </section>

        <section className="about-vision-section">
          <div className="about-vision-card about-vision-image-card">
            <img src="/images/about1.avif" alt="Gaming experience" />
          </div>

          <div className="about-vision-card about-vision-content-card">
            <span>Our Vision</span>
            <h2>To Make Every Game Feel Like a New Adventure</h2>
            <p>
              We believe gaming is more than entertainment. It is energy, creativity, focus, and connection.
              Our goal is to design experiences that keep players engaged through strong visuals, quick interactions,
              and rewarding gameplay moments.
            </p>
          </div>
        </section>

        <section className="about-values-section">
          <div className="about-values-header">
            <span>What We Believe</span>
            <h2>Built on Gameplay, Design, and Player Energy</h2>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Fast Gameplay</h3>
              <p>We create smooth experiences where every click, move, and action feels responsive.</p>
            </div>

            <div className="about-value-card">
              <h3>Bold Visuals</h3>
              <p>Our gaming style focuses on strong contrast, cinematic layouts, and immersive presentation.</p>
            </div>

            <div className="about-value-card">
              <h3>Player First</h3>
              <p>Every section, level, and feature is planned around how players feel while using it.</p>
            </div>

            <div className="about-value-card">
              <h3>Creative Worlds</h3>
              <p>We love building game spaces that feel fresh, memorable, and full of motion.</p>
            </div>
          </div>
        </section>

        <section className="about-experience-section">
          <div className="about-experience-content">
            <span>Gaming Experience</span>
            <h2>Designed for Immersion From Start to Finish</h2>
            <p>
              From home screens to game cards, from tournament sections to interactive pages, our design direction
              stays focused on making the website feel like a real gaming platform.
            </p>
          </div>

          <div className="about-experience-image">
            <img src="/images/about2.avif" alt="Gaming console" />
          </div>
        </section>

        <section className="about-stats-section">
          <div className="about-stat-card">
            <strong>24/7</strong>
            <span>Gaming Energy</span>
          </div>

          <div className="about-stat-card">
            <strong>100%</strong>
            <span>Player Focused</span>
          </div>

          <div className="about-stat-card">
            <strong>5+</strong>
            <span>Creative Sections</span>
          </div>

          <div className="about-stat-card">
            <strong>∞</strong>
            <span>Game Possibilities</span>
          </div>
        </section>

        <section className="about-final-section">
          <div className="about-final-inner">
            <span>Let the Game Begin</span>
            <h2>We Are Here to Create Playful, Powerful, and Beautiful Gaming Experiences</h2>
            <p>
              Games Soft is ready to grow into a complete gaming platform with stunning sections, game showcases,
              tournaments, contact pages, and player-focused experiences.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}

export default About;