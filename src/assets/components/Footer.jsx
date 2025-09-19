import React from "react";
import { FiHome } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FloatingDock } from "./FloatingDock";

export function Footer() {
  const links = [
    {
      title: "Home",
      icon: <FiHome />,
      href: "#",
    },

    {
      title: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/Vikash10x",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vikash-kumawat-186a01290/",
    },
    {
      title: "X",
      icon: <FaXTwitter />,
      href: "https://x.com/vikashkumawattt",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
