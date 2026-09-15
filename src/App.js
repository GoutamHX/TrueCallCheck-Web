import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ChatBot from "./Components/ChatBot";
import PrivacyPolicy from "./Components/pages/PrivacyPolicy";
import TermsOfService from "./Components/pages/TermsOfService";
import AboutUs from "./Components/pages/AboutUs";
import ContactUs from "./Components/pages/ContactUs";
import Disclaimer from "./Components/pages/Disclaimer";
import GuidesHub from "./Components/pages/GuidesHub";
import GuideDetail from "./Components/pages/GuideDetail";
import { useAuthorAttestation } from "./hooks/useAuthorAttestation";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useAuthorAttestation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.remove(darkMode ? "light-mode" : "dark-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Search & Intelligence Tool */}
        <Route
          path="/"
          element={
            <>
              <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Footer darkMode={darkMode} />
              <ChatBot />
            </>
          }
        />

        {/* AdSense Compliance & Legal Documentation */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/terms"
          element={<TermsOfService darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/about"
          element={<AboutUs darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/contact"
          element={<ContactUs darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/disclaimer"
          element={<Disclaimer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />

        {/* High-Value Educational Telecom Guides Hub & Details */}
        <Route
          path="/guides"
          element={<GuidesHub darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/guides/:slug"
          element={<GuideDetail darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />

        {/* Catch-all Fallback */}
        <Route
          path="*"
          element={
            <>
              <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Footer darkMode={darkMode} />
              <ChatBot />
            </>
          }
        />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
