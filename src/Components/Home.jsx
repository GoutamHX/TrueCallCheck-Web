import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaSearch,
  FaPhoneAlt,
  FaChartLine,
  FaTelegram,
  FaTools,
  FaExclamationTriangle,
} from "react-icons/fa";
import Navbar from "./Navbar";
import "../Style/Home.css";
import { Link } from "react-router-dom";

function Home({ darkMode, toggleDarkMode }) {
  const [carrier, setCarrier] = useState("");
  const [country, setCountry] = useState("");
  const [localFormat, setLocalFormat] = useState("");
  const [location, setLocation] = useState("");
  const [timezones, setTimezones] = useState([]);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [developer, setDeveloper] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [notice, setNotice] = useState(null);
  const [showNotice, setShowNotice] = useState(false);

  const handleGetDetails = async () => {
    if (!num) return toast.warn("Please enter a number!");
    // Validate Indian number format (10 digits)
    if (!/^\d{10}$/.test(num)) {
      return toast.warn("Please enter a valid 10-digit Indian number!");
    }
    try {
      setLoading(true);
      setShowResult(false);
      const result = await axios.get(
        `https://true-call-check.vercel.app/api/truecaller?q=+91${num}`
      );

      if (result.status === 200) {
        const data = result.data;

        if (data.notice) {
          toast.info(data.notice, {
            autoClose: 9000, // keep it longer
          });
        }

        const resolvedName =
          result.data.name || result.data.Unknown || "No name found!";
        setName(resolvedName);
        setCarrier(result.data.carrier || "Not available");
        setCountry(result.data.country || "Not available");
        setLocalFormat(result.data.local_format || `+91 ${num}`);
        setLocation(result.data.location || "Not available");
        setTimezones(result.data.timezones || ["Not available"]);
        setDeveloper(result.data.developer || "TG:@TheAdvanceBots");
        setShowResult(true);
        console.log(
          `Devloper Info :\nGithub:- @GoutamHX\nTelegram Admin:- @MR_GOUTAM08\nTelegram Channel:- @TheAdvanceBots`
        );
      }
    } catch (error) {
      const status = error.response?.status;
      const serverMsg = error.response?.data?.error;

      if (status === 400) {
        toast.error(serverMsg || "Bad request. Please try again.");
      } else if (status === 500) {
        toast.error("🔴 Server is currently down or busy. Try again later!");
      } else if (
        error.code === "ECONNABORTED" ||
        error.message === "Network Error"
      ) {
        toast.error("🔌 Website is currently offline. Check your connection.");
      } else {
        toast.error("❌ Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetNotice = async () => {
    try {
      const response = await axios.get(
        "https://true-call-check.vercel.app/web-notice"
      );
      const data = response.data;
      if (data.notice) {
        setNotice(data);
        setShowNotice(true);
      }
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };
  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Number Lookup",
      description: "Get complete details about any phone number instantly",
    },
    // {
    //   icon: <FaGlobe />,
    //   title: "Global Coverage",
    //   description: "Works with numbers from over 200 countries worldwide"
    // },
    // {
    //   icon: <FaUserShield />,
    //   title: "Spam Protection",
    //   description: "Identify potential spam calls before answering"
    // },
    {
      icon: <FaChartLine />,
      title: "Call Analytics",
      description: "Track and analyze your call patterns",
    },
  ];

  useEffect(() => {
    handleGetNotice();
  }, []);
  return (
    <div
      className="home-app"
      style={{
        backgroundColor: `var(--bg-color)`,
        color: `var(--text-color)`,
      }}
    >
      {/* Maintenance Mode Overlay */}
      {showNotice && (
        <div className="maintenance-overlay">
          <motion.div
            className={`maintenance-box ${
              darkMode ? "dark-maintenance" : "light-maintenance"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {/* Decorative elements */}
            <div className="maintenance-decoration">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
            </div>

            {/* Main content */}
            <div className="maintenance-icon-container">
              <div className="maintenance-icon-circle">
                <FaTools size={32} className="main-tool-icon" />
                <FaExclamationTriangle size={16} className="exclamation-icon" />
              </div>
              <div className="pulse-dots">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
              </div>
            </div>

            <h2 className="maintenance-title">
              <span className="title-highlight">{notice.title}</span>
            </h2>

            <div className="maintenance-message-container">
              <p className="maintenance-message">{notice.message}</p>
            </div>

            {notice.button && notice.button_url && (
              <motion.a
                href={notice.button_url}
                target="_blank"
                rel="noopener noreferrer"
                className="maintenance-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram className="button-icon" />
                <span>{notice.button}</span>
                <div className="button-hover-effect"></div>
              </motion.a>
            )}

            <div className="maintenance-footer">
              <div className="footer-divider"></div>
              <p>
                Admin:{" "}
                <Link
                  className="admin-link"
                  to="https://t.me/MR_GOUTAM08"
                  target="_blank"
                >
                  @MR_GOUTAM08
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      )}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="home-main">
          {/* Hero Section */}
          <section className="hero-section p-5">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-title">
                <span className="gradient-text">TrueCallCheck</span>{" "}
                <span className="text">- Advanced Phone Number Analysis</span>
              </h1>
              <p className="hero-subtitle">
                Uncover caller details, detect spam, and protect yourself from
                unwanted calls
              </p>

              <motion.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className={`search-box ${
                    darkMode ? "bg-slate-800" : "bg-white"
                  }`}
                >
                  <span className="country-code">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={num}
                    maxLength={10}
                    onChange={(e) => setNum(e.target.value.replace(/\D/g, ""))}
                    onKeyPress={(e) => e.key === "Enter" && handleGetDetails()}
                  />
                  <motion.button
                    style={{
                      backgroundColor: `var(--primary)`,
                      color: "white",
                    }}
                    onClick={handleGetDetails}
                    disabled={loading}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {loading ? (
                      <span className="spinner"></span>
                    ) : (
                      <>
                        <FaSearch /> Search
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
            {/* Results Section */}
            {showResult && (
              <motion.section
                className="results-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2>Search Results</h2>
                <div className="result-card">
                  <div className="result-field">
                    <span>Phone Number:</span>
                    <span>{localFormat}</span>
                  </div>
                  <div className="result-field">
                    <span>Name:</span>
                    <span>{name}</span>
                  </div>
                  <div className="result-field">
                    <span>Carrier:</span>
                    <span>{carrier}</span>
                  </div>
                  <div className="result-field">
                    <span>Location:</span>
                    <span>{location}</span>
                  </div>
                  <div className="result-field">
                    <span>Country:</span>
                    <span>{country}</span>
                  </div>
                  <div className="result-field">
                    <span>Timezones:</span>
                    <span>{timezones.join(", ")}</span>
                  </div>
                  <div className="result-field">
                    <span>Devloper:</span>
                    <span>{developer}</span>
                  </div>
                </div>
              </motion.section>
            )}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="stat-card">
                <div className="stat-value">10K+</div>
                <div className="stat-label">Numbers Analyzed</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">India</div>
                <div className="stat-label">Country</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {darkMode ? (
                <span className="text-light">Why Choose TrueCallCheck?</span>
              ) : (
                " Why Choose TrueCallCheck?"
              )}
            </motion.h2>

            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`feature-card `}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  {darkMode ? (
                    <h3 className="text-light">{feature.title}</h3>
                  ) : (
                    <h3>{feature.title}</h3>
                  )}
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default Home;
