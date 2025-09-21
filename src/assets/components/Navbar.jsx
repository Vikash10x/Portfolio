import React from "react";

export const Navbar = () => {
  return (
    <div className="flex gap-3">
      <div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-1">
          Hi, I'm Vikash 👋
        </h1>
        <h4 className="text-lg md:text-xl ">
          Software Engineer | Passionate about building things and helping
          people | Active on LinkedIn.
        </h4>
      </div>
      <div className="">
        <img
          className="w-47 h-30 rounded-[50%] shadow-lg"
          src="/Images/profile.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
