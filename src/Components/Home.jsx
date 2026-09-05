import React, { useState, useEffect, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import {
  NoticeModal,
  HeroSection,
  ResultSection,
  AboutSection,
  FeaturesSection,
  PrivacySection,
  PlatformsSection,
} from "./sections";
import { trueCallerService } from "../services/trueCallerService";
import "../Style/Home.css";

function Home({ darkMode, toggleDarkMode }) {
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [notice, setNotice] = useState(null);
  const [showNotice, setShowNotice] = useState(false);
  const [mainRecords, setMainRecords] = useState([]);
  const [altRecords, setAltRecords] = useState([]);
  const [searchMeta, setSearchMeta] = useState(null);
  const [developer, setDeveloper] = useState("");
  const [telegram, setTelegram] = useState("");
  const [noData, setNoData] = useState(false);

  const resetResults = useCallback(() => {
    setShowResult(false);
    setNoData(false);
    setMainRecords([]);
    setAltRecords([]);
    setSearchMeta(null);
  }, []);

  const handleGetDetails = async () => {
    if (!num) return toast.warn("Please enter a phone number.");
    if (!/^\d{10}$/.test(num)) {
      return toast.warn("Please enter a valid 10-digit Indian number.");
    }

    resetResults();
    setLoading(true);

    try {
      const data = await trueCallerService.fetchNumberDetails(num);

      const main = Array.isArray(data?.data?.main_records)
        ? data.data.main_records
        : [];
      const alt = Array.isArray(data?.data?.alternative_records)
        ? data.data.alternative_records
        : [];

      if (main.length === 0 && alt.length === 0) {
        setNoData(true);
      } else {
        setMainRecords(main);
        setAltRecords(alt);
        setSearchMeta({
          total: main.length + alt.length,
          main: main.length,
          alt: alt.length,
        });
        setShowResult(true);
      }

      setDeveloper(data?.developer || "Github:@GoutamHX");
      setTelegram(data?.Telegram || "@MR_GOUTAM08");
    } catch (error) {
      const errorMsg = trueCallerService.getErrorMessage(error);
      if (errorMsg === "NOT_FOUND") {
        setNoData(true);
      } else {
        toast.error(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetNotice = async () => {
    const data = await trueCallerService.fetchNotice();
    if (data && data.notice) {
      setNotice(data);
      setShowNotice(true);
    }
  };

  useEffect(() => {
    handleGetNotice();
  }, []);

  return (
    <div className="home-app">
      {/* Notice / Maintenance Modal */}
      <NoticeModal
        showNotice={showNotice}
        notice={notice}
        darkMode={darkMode}
      />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="home-main">
        {/* Hero & Search Section */}
        <HeroSection
          phoneNumber={num}
          setPhoneNumber={setNum}
          loading={loading}
          onSearch={handleGetDetails}
          noData={noData}
        />

        {/* Search Results Section */}
        <ResultSection
          showResult={showResult}
          searchMeta={searchMeta}
          mainRecords={mainRecords}
          altRecords={altRecords}
          developer={developer}
          telegram={telegram}
        />

        {/* Informational & Value Sections */}
        <AboutSection />
        <FeaturesSection />
        <PrivacySection />
        <PlatformsSection />
      </main>

      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default Home;
