import React from "react";
import { RxMoon } from "react-icons/rx";
import { BsBrightnessHigh } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ToggleTheme({ darkMode, toggleDarkMode }) {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <button onClick={toggleDarkMode} className="p-3.5 cursor-pointer">
      {darkMode ? <RxMoon /> : <BsBrightnessHigh />}
    </button>
  );
}
