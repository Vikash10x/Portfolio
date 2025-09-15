import React from "react";
import { MdBrightness3 } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ToggleTheme({ toggleDarkMode }) {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("theme") === "dark") {
  //     document.documentElement.classList.add("dark");
  //     setDarkMode(true);
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   if (darkMode) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //     setDarkMode(false);
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //     setDarkMode(true);
  //   }
  // };

  return (
    <button onClick={toggleDarkMode} className="p-3.5 cursor-pointer">
      {darkMode ? <MdBrightness3 className="" /> : <BsBrightnessHigh />}
    </button>
  );
}
