import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
        setIsMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "gaming-nav-link gaming-nav-link-active" : "gaming-nav-link";

  const mobileNavClass = ({ isActive }) =>
    isActive ? "gaming-mobile-link gaming-mobile-link-active" : "gaming-mobile-link";

  return (
    <header className={`gaming-navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="gaming-navbar-scan" />

      <nav className="gaming-navbar-inner">
        <Link to="/" className="gaming-logo-link" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Gaming Logo" className="gaming-logo" />
        </Link>

        <div className="gaming-nav-links">
          <NavLink to="/" className={navClass} end>
            <span>Home</span>
          </NavLink>

          <NavLink to="/about" className={navClass}>
            <span>About</span>
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            <span>Contact Us</span>
          </NavLink>
        </div>

        <button
          type="button"
          className={`gaming-menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`gaming-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" className={mobileNavClass} onClick={closeMenu} end>
          Home
        </NavLink>

        <NavLink to="/about" className={mobileNavClass} onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" className={mobileNavClass} onClick={closeMenu}>
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;