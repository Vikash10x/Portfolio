import React from "react";
import { RxMoon } from "react-icons/rx";
import { BsBrightnessHigh } from "react-icons/bs";
import { useTheme } from "../contexts/theme";

export default function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className="p-3.5 cursor-pointer">
      {darkMode ? <RxMoon /> : <BsBrightnessHigh />}
    </button>
  );
}
