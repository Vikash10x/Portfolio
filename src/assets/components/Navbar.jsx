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
      <div>
        <img
          className="w-40 sm:w-45 rounded-[50%]"
          src="Images/profile.jpg"
          alt=""
          // width={200}
        />
      </div>
    </div>
  );
};
