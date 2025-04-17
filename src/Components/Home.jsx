import React, { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch, FaPhoneAlt, FaGlobe, FaUserShield, FaChartLine } from "react-icons/fa";
import Navbar from './Navbar';
import '../Style/Home.css';

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
  const analyzerRef = useRef(null);

  const handleGetDetails = async () => {
    if (!num) return toast.warn("Please enter a number!");
    if (num.length !== 10) return toast.warn("Please enter a valid 10-digit number!");
  
    try {
      setLoading(true);
      setShowResult(false);
      const result = await axios.get(
        `https://true-call-check.vercel.app/truecaller?q=+91${num}`
      );
  
      if (result.status === 200) {
        const data = result.data;

        if (data.notice) {
          toast.info(data.notice, {
            autoClose: 8000, // keep it longer
          });
        }
  
        const resolvedName = result.data.name || result.data.Unknown || "No name found!";
        setName(resolvedName);
        setCarrier(result.data.carrier || "Not available");
        setCountry(result.data.country || "Not available");
        setLocalFormat(result.data.local_format || `+91 ${num}`);
        setLocation(result.data.location || "Not available");
        setTimezones(result.data.timezones || ["Not available"]);
        setDeveloper(result.data.developer || "TG:@TheAdvanceBots");
        setShowResult(true);
      }
    } catch (error) {
      const status = error.response?.status;
      const serverMsg = error.response?.data?.error;
  
      if (status === 400) {
        toast.error(serverMsg || "Bad request. Please try again.");
      } else if (status === 500) {
        toast.error("🔴 Server is currently down or busy. Try again later!");
      } else if (error.code === "ECONNABORTED" || error.message === "Network Error") {
        toast.error("🔌 Website is currently offline. Check your connection.");
      } else {
        toast.error("❌ Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Number Lookup",
      description: "Get complete details about any phone number instantly"
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
      description: "Track and analyze your call patterns"
    }
  ];
  const userAgent = navigator.userAgent;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const language = navigator.language;

console.log({
  userAgent, // e.g., "Mozilla/5.0 (Windows NT 10.0...)"
  screenWidth,
  screenHeight,
  timezone, // e.g., "America/New_York"
  language, // e.g., "en-US"
});

  return (
    <div 
    className="home-app"
    style={{
      backgroundColor: `var(--bg-color)`,
      color: `var(--text-color)`
    }}
  >
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
              <span className="gradient-text">TrueCallCheck</span> <span className='text' >- Advanced Phone Number Analysis</span>
            </h1>
            <p className="hero-subtitle">
              Uncover caller details, detect spam, and protect yourself from unwanted calls
            </p>
            
            <motion.div 
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className={`search-box ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={num}
                  maxLength={10}
                  onChange={(e) => setNum(e.target.value.replace(/\D/g, ''))}
                  onKeyPress={(e) => e.key === 'Enter' && handleGetDetails()}
                />
                <motion.button
                style={{
                  backgroundColor: `var(--primary)`,
                  color: 'white'
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
              <div className="stat-value">5K+</div>
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
            {darkMode ? <span className="text-light">Why Choose TrueCallCheck?</span>:" Why Choose TrueCallCheck?"}
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`feature-card ${darkMode ? 'bg-slate-800' : 'bg-white'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                {darkMode?<p style={{color:"#b0b0b0"}}>{feature.description}</p>: <p>{feature.description}</p>}
                
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
        theme={darkMode ? 'dark' : 'light'}
      />
    </div>
  );
}

export default Home;