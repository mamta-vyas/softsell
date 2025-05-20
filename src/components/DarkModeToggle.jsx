import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded z-50"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;
