import React from "react";

const data = [
  "Java Script",
  "React",
  "Node.js",
  "Express",
  "Python",
  "C",
  "C++",
];
export const Skills = () => {
  return (
    <div className="mt-11">
      <h2 className="text-[20px] sm:text-[22px] font-bold mb-4">Skills</h2>
      <div className="space-x-1.5">
        {data.map((item, index) => (
          <button
            key={index}
            className="bg-black text-white text-[12px] font-bold rounded-[5px] mb-1 px-3 py-0.5 hover:bg-gray-700 dark:hover:bg-gray-200 dark:bg-white dark:text-black"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
