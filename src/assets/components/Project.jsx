import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
const data = [
  {
    img: "Images/card1.png",
    heading: "Weather App",
    desc: "The Weather App provides real-time updates on any city’s weather, showing accurate temperature and conditions. Its clean and user-friendly design makes daily planning effortless.",
    lang: ["HTML", "CSS", "JavaScript"],
    website: "https://vikash10x.github.io/Weather-app/",
    source: "https://github.com/Vikash10x/Weather-app",
  },
  {
    img: "Images/card4.png",
    heading: "Y Combinator",
    desc: "Y Combinator website clone built with modern frontend technologies.Focused on clean UI, smooth navigation, and pixel-perfect design.Showcases my skills in frontend development and attention to detail.",
    lang: ["HTML", "CSS"],
    website: "https://y-combinator.vercel.app/",
    // source: "https://github.com/Vikash10x/Y-Combinator",
  },

  {
    img: "Images/card3.png",
    heading: "Amazon-Clone",
    desc: "The Amazon Clone replicates the core shopping experience with product listings, cart, and checkout functionality. It features a clean, responsive UI and smooth navigation, offering an e-commerce feel similar to the original platform.",
    lang: ["HTML", "CSS", "JavaScript"],
    website: "https://amazon-clone-orcin-two.vercel.app/",
    source: "https://github.com/Vikash10x/Amazon-Clone",
  },
  {
    img: "Images/card2.png",
    heading: "Todo-List-App",
    desc: "The Todo List App is a lightweight task management tool that allows users to add, edit, mark complete, and delete tasks. It is designed with a clean interface to boost productivity and keep daily activities organized.",
    lang: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    website: "https://todo-list-app-nu-steel.vercel.app/",
    source: "https://github.com/Vikash10x/TodoList-App",
  },
];

export const Project = () => {
  return (
    <div className="mt-15">
      <div className="text-center">
        <button className="bg-black text-white text-center text-[13px] font-bold rounded-[5px] px-4 py-1 mb-2 dark:bg-white dark:text-black">
          My Projects
        </button>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2.5">
          Check out my latest work
        </h1>
        <h5 className="text-[18px] md:text-xl opacity-50">
          I’ve worked on a few frontend projects, mainly simple websites and
          applications. Here are some of my favorites.
        </h5>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className=" w-full sm:w-[48%] border border-[#e5e7eb] overflow-hidden rounded-[10px] transform transition duration-400 hover:scale-104 dark:border-[#e5e7eb2a]"
          >
            <a href={item.website}>
              <img className="object-fill" src={item.img} alt="" />
            </a>

            <div className="p-2">
              <h2 className="font-bold text-lg">{item.heading}</h2>

              <p className="text-[13px] opacity-50">{item.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.lang.map((lang, i) => (
                  <p
                    key={i}
                    className="bg-gray-100 text-neutral-600 text-[10px] font-bold rounded px-2 py-0.5 dark:bg-[#2c2c2c] dark:text-white"
                  >
                    {lang}
                  </p>
                ))}
              </div>

              <div className="space-x-2 pt-4 flex">
                <div className="flex items-center justify-center bg-[#171717] cursor-pointer text-white px-2.5 py-1 rounded-[5px] text-[11px] font-bold gap-1.5 hover:bg-gray-700 dark:bg-white dark:text-[#171717] dark:hover:bg-gray-200">
                  <TbWorld />
                  <a href={item.website}>Website</a>
                </div>
                {item.source && (
                  <div className="flex items-center justify-center bg-[#171717] cursor-pointer text-white px-2.5 py-1 rounded-[5px] text-[11px] font-bold gap-1.5 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <FaGithub />
                    <a href={item.source}>Source</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
