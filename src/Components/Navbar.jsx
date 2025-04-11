import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../Style/Navbar.css";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar sticky-top shadow-sm ${darkMode ? 'navbar-background ' : 'navbar-light bg-light'}`}>
      <div className="container d-flex justify-content-between align-items-center py-2">
        
        {/* Brand */}
        <div className={`${darkMode?'text-light':''} d-flex align-items-center gap-2 fw-bold fs-4`}>
          <span className="logo-icon">📱</span>
          <span>TrueCallCheck</span>
        </div>

        {/* Toggle Dark Mode */}
        <button 
          className="btn navbar-btn d-flex align-items-center toggle-theme-btn text-h6"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="me-1" /> : <FaMoon className="me-1" />}
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
