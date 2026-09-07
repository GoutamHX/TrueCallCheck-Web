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
import AdBanner from "./AdBanner";
import { trueCallCheckService } from "../services/trueCallCheckService";
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
      const data = await trueCallCheckService.fetchNumberDetails(num);

      // Handle explicit NO_DATA API response
      if (data?.code === "NO_DATA" || (typeof data?.error === "string" && data.error.toLowerCase().includes("no data"))) {
        setNoData({
          error: data?.error || "⚠️ No data found for this number.",
          code: data?.code || "NO_DATA",
          developer: data?.developer || "Github:@GoutamHX",
          telegram: data?.Telegram || "@MR_GOUTAM08",
          notice: data?.notice || "",
        });
        if (data?.developer) setDeveloper(data.developer);
        if (data?.Telegram) setTelegram(data.Telegram);
        return;
      }

      const main = Array.isArray(data?.data?.main_records)
        ? data.data.main_records
        : [];
      const alt = Array.isArray(data?.data?.alternative_records)
        ? data.data.alternative_records
        : [];

      if (main.length === 0 && alt.length === 0) {
        setNoData({
          error: data?.error || "⚠️ No data found for this number.",
          code: data?.code || "NO_DATA",
          developer: data?.developer || "Github:@GoutamHX",
          telegram: data?.Telegram || "@MR_GOUTAM08",
          notice: data?.notice || "",
        });
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
      const resData = error?.response?.data;
      const status = error?.response?.status;
      const isNotFound =
        status === 404 ||
        resData?.code === "NO_DATA" ||
        (typeof resData?.error === "string" && resData.error.toLowerCase().includes("no data"));

      if (isNotFound) {
        setNoData({
          error: resData?.error || "⚠️ No data found for this number.",
          code: resData?.code || "NO_DATA",
          developer: resData?.developer || "Github:@GoutamHX",
          telegram: resData?.Telegram || "@MR_GOUTAM08",
          notice: resData?.notice || "",
        });
        if (resData?.developer) setDeveloper(resData.developer);
        if (resData?.Telegram) setTelegram(resData.Telegram);
      } else {
        const errorMsg = trueCallCheckService.getErrorMessage(error);
        toast.error(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetNotice = async () => {
    const data = await trueCallCheckService.fetchNotice();
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
        onClose={() => setShowNotice(false)}
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

        {/* Google AdSense - After Features Section */}
        <AdBanner slot="8365180918" style={{ margin: "40px auto 20px" }} />

        <PrivacySection />
        <PlatformsSection />

        {/* Google AdSense - In Bottom Ads (Above Footer) */}
        <AdBanner slot="4449986637" style={{ margin: "50px auto 25px" }} />
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
