import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "./menuConfig";

const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return document.body.classList.contains("odd");
    } catch (e) {
      return false;
    }
  });
  const [iconSpin, setIconSpin] = useState(false);
  const spinTimerRef = useRef(null);

  const toggleDarkMode = () => {
    const body = document.body;

    // Trigger spin animation
    setIconSpin(true);
    if (spinTimerRef.current) clearTimeout(spinTimerRef.current);
    spinTimerRef.current = setTimeout(() => setIconSpin(false), 700);

    const next = !isDarkMode;
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) { }

    // Use View Transitions API for smooth ripple effect (if supported)
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsDarkMode(next);
        if (next) {
          body.classList.add("odd");
        } else {
          body.classList.remove("odd");
        }
      });
    } else {
      // Fallback: toggle directly
      setIsDarkMode(next);
      if (next) {
        body.classList.add("odd");
      } else {
        body.classList.remove("odd");
      }
    }
  };

  // Sync body class on mount (in case of SSR/hydration mismatch)
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("odd");
    } else {
      body.classList.remove("odd");
    }
  }, [isDarkMode]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (spinTimerRef.current) clearTimeout(spinTimerRef.current);
    };
  }, []);

  return (
    <header id="header">
      <nav className="navbar navbar-expand">
        <div className="container header">
          {/* Navbar Brand */}
          <div className="magnetic">
            <a className="navbar-brand" href="/">
              Abhinav.
            </a>
          </div>
          <div className="ms-auto"></div>

          {/* Navbar Nav */}
          <ul className="navbar-nav items d-none d-md-block">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  className={`nav-link ${location.pathname === item.href ? "active" : ""
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <ul className="navbar-nav icons d-flex align-items-center">
            <li className="nav-item">
              <button
                type="button"
                className="theme-toggle-btn border-0"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <div className="theme-icon-container">
                  <span
                    className={`icon material-symbols-outlined theme-toggle-icon${iconSpin ? " theme-icon-spin" : ""}`}
                  >
                    {isDarkMode ? "light_mode" : "dark_mode"}
                  </span>
                </div>
              </button>
            </li>
          </ul>

          {/* Navbar Toggler */}
          <div
            className="navbar-toggler scrolled"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <div className="navbar-header">
              <div className="content">
                <div className="toggler-icon"></div>
                <span className="title">Menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="navbar-main" className="main"></div>
    </header>
  );
};

export default Header;
