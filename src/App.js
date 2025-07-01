import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from '../src/Components/Footer';
import Home from "./Components/Home";
import ChatBot from "./Components/ChatBot";
import { useAntiInspect } from "./hooks/useAntiInspect";

function App() {
  useAntiInspect()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} />
      {/* <ChatBot/> */}
    </>
  );
}

export default App;
