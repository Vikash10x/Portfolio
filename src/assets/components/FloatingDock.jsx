import React from "react";
import { useRef, useState } from "react";
import ToggleTheme from "./ToggleTheme";

import {
  motion,
  useMotionValue,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";

export const FloatingDock = ({
  items,
  desktopClassName,
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
    </>
  );
};

const FloatingDockDesktop = ({ items, toggleDarkMode, darkMode }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto gap-4 border border-[#e5e7eb] dark:border-none rounded-full py-1 px-3 flex dark:bg-[#262626] items-center bg-[#ffffff] shadow-md cursor-pointer"
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
      <div className="w-[1px] h-8 border border-[#e5e7eb] bg-gray-600"></div>
      <div className=" hover:bg-gray-200 rounded-full duration-200 dark:hover:bg-[#3d40466c]">
        <ToggleTheme toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [30, 50, 30]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [30, 50, 30]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full hover:bg-gray-200 duration-200 dark:hover:bg-[#3d404686]"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-7.5 left-1/2 w-fit rounded bg-gray-800 px-3 py-1 text-[11px] whitespace-pre text-white dark:bg-white dark:text-black font-"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="flex items-center justify-center w-6 h-6"
          animate={{ scale: hovered ? 1.3 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
