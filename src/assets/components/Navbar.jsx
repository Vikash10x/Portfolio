import React from "react";

export const Navbar = () => {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-1">
          Hi, I'm Vikash 👋
        </h1>
        <h4 className="text-lg md:text-xl ">
          Software Engineer | Passionate about building things and helping
          people | Active on LinkedIn.
        </h4>
      </div>
      <div className="min-w-25 h-25 rounded-full overflow-hidden">
        <img
          className="object-fill object-center w-full h-full"
          src="https://media.licdn.com/dms/image/v2/D5603AQHkYuvrSgYdnw/profile-displayphoto-scale_400_400/B56ZqrkwtaHIAg-/0/1763815138515?e=1765411200&v=beta&t=W9VhNyiD99Tq-5Nm9luufSImDFw0vfry-9YgK1-T3rE"
          alt=""
        />
      </div>
    </div>
  );
};
