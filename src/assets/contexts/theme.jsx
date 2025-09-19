import React from "react";
import { useState, useContext, useRef, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const first = useRef();
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    if (darkMode) {
      first.current.classList.remove("dark");
      setDarkMode(false);
    } else {
      first.current.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, first }}>
      <div
        ref={first}
        className="dark min-h-screen bg-white dark:bg-black dark:text-gray-100 transition-colors duration-500"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
