import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/Home.css';
import Navbar from './Navbar';
import {
  FaMobileAlt, FaSearch, FaUserCircle, FaPhone,
  FaSimCard, FaMapMarkerAlt, FaGlobe, FaClock,
  FaCheckCircle, FaFileAlt
} from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

function Home({ darkMode, toggleDarkMode }) {
  const [carrier, setCarrier] = useState("");
  const [country, setCountry] = useState("");
  const [internationalFormat, setInternationalFormat] = useState("");
  const [localFormat, setLocalFormat] = useState("");
  const [location, setLocation] = useState("");
  const [timezones, setTimezones] = useState([]);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [developer, setDevloper] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

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
        const data = result.data.data || {};
        const resolvedName = result.data.name || result.data.Unknown || "Unknown";

        setName(resolvedName);
        setCarrier(result.data.carrier || "Not available");
        setCountry(result.data.country || "Not available");
        setInternationalFormat(result.data.internationalFormat || "Not available");
        setLocalFormat(result.data.local_format || "Not available");
        setLocation(result.data.location || "Not available");
        setTimezones(result.data.timezones || ["Not available"]);
        setDevloper(result.data.developer || "TG:@TheAdvanceBots");
        setShowResult(true);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong. Try again.");
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`min-vh-100 d-flex align-items-center ${darkMode ? 'dark-mode' : 'light-mode'} py-4`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card glass-panel border-0">
                <div className="card-body p-4 p-md-5">

                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="icon-container mx-auto mb-3 d-flex align-items-center justify-content-center">
                      <FaMobileAlt size={28} color="white" />
                    </div>
                    <h1 className="h2 fw-bold mb-2">Phone Number Analyzer</h1>
                    <p className="">
                      Discover carrier, location, and more details instantly
                    </p>
                  </div>

                  {/* Input Section */}
                  <div className="mb-4">
                    <div className="input-group input-group-lg mb-3 glow-on-hover">
                      <span className="input-group-text bg-white border-end-0 fw-bold">+91</span>
                      <input
                        type="tel"
                        className="form-control border-start-0"
                        placeholder="Enter 10-digit number"
                        value={num}
                        maxLength={10}
                        onChange={(e) => setNum(e.target.value.replace(/\D/g, ''))}
                        onKeyPress={(e) => e.key === 'Enter' && handleGetDetails()}
                      />
                      <button
                        onClick={handleGetDetails}
                        className="btn btn-primary px-4"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <FaSearch className="me-2" />
                            Analyze
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Results Section */}
                  {showResult && (
                    <div className="mt-5">
                      <div className={`border-0 `}>
                        <div className={` ${darkMode ? 'text-light border-secondary' : 'bg-white border-bottom'} pb-3`}>
                          <div className="d-flex justify-content-between align-items-center">
                            <h3 className="h5 mb-0">
                              <FaFileAlt className="me-2 text-primary" />
                              Analysis Report
                            </h3>
                            <span className="badge bg-success d-flex align-items-center">
                              <FaCheckCircle className="me-1" />
                              Verified
                            </span>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className={`${darkMode ? 'text-light' : "card-text"} row g-4`}>
                            {/* Registered Name */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center text-h6`}>
                                  <FaUserCircle className="me-1" /> Registered Name
                                </h6>
                                <p className="fs-5 fw-semibold mb-0">{name}</p>
                              </div>
                            </div>

                            {/* Phone Number */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center  text-h6`}>
                                  <FaPhone className="me-1" /> Phone Number
                                </h6>
                                <p className="mb-0 fw-bold">{localFormat || `+91 ${num}`}</p>
                              </div>
                            </div>

                            {/* Carrier */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center  text-h6`}>
                                  <FaSimCard className="me-1" /> Carrier
                                </h6>
                                <p className="mb-0 fw-bold">{carrier}</p>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center  text-h6`}>
                                  <FaMapMarkerAlt className="me-1" /> Location
                                </h6>
                                <p className="mb-0 fw-bold">{location}</p>
                              </div>
                            </div>

                            {/* Country */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center  text-h6`}>
                                  <FaGlobe className="me-1" /> Country
                                </h6>
                                <p className="mb-0 fw-bold">{country}</p>
                              </div>
                            </div>

                            {/* Timezone */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center  text-h6`}>
                                  <FaClock className="me-1" /> Timezone
                                </h6>
                                <p className="mb-0 fw-bold">{timezones[0]}</p>
                              </div>
                            </div>
                            {/* Devloper */}
                            <div className="col-md-6">
                              <div className="rounded p-3 bg-opacity-25 card-body-result" >
                                <h6 className={`small mb-1 d-flex align-items-center  text-h6`}>
                                  <AiFillFire className="me-1" /> Devloper
                                </h6>
                                <p className="mb-0 fw-bold">{developer}</p>
                              </div>
                            </div>
                          </div>

                          {/* Confidence Level */}
                          <div className="mt-4">
                            <div className="progress rounded-pill" style={{ height: "8px" }}>
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? 'dark' : 'light'}
      />
    </>
  );
}

export default Home;
