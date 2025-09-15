import { useRef, useState } from "react";
import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Navbar } from "./assets/components/Navbar";
import { About_me } from "./assets/components/About_me";
import { Education } from "./assets/components/Education";
import { Skills } from "./assets/components/Skills";
import { Project } from "./assets/components/Project";
import { Footer } from "./assets/components/Footer";
import { Email } from "./assets/components/Email";

function App() {
  const first = useRef();
  const [darkMode, setDarkMode] = useState(false);

  const Togglebtn = () => {
    const toggleDarkMode = () => {
      if (darkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setDarkMode(true);
      }
    };
  };

  return (
    <div className="raf={raf}  min-h-screen bg-white dark:bg-black dark:text-gray-100 transition-colors duration-500">
      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="min-h-screen max-w-2xl mx-auto font-sans pt-15 pb-40 px-6"
      >
        <Navbar />
        <About_me />
        <Education />
        <Skills />
        <Project />
        <Email />
      </motion.div>

      <div className="fixed bottom-5 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
