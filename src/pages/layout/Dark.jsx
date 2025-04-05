import { useState, useEffect, Fragment } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Dark = () => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={() => setDarkMode(!isDarkMode)}
      size={28}
      className="dark-btn"
    />
  );
};

export default Dark;
