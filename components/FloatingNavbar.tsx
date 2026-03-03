// components/FloatingNavbar.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", link: "#top" },
  { name: "About Me", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function FloatingNavbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault(); // stop normal jump

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo also scrolls to top */}
        <a
          href="#top"
          onClick={(e) => handleScroll(e, "#top")}
          className="text-2xl font-bold text-white hover:text-orange-300 transition-colors"
        >
          Belaynew.Z
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => handleScroll(e, item.link)}
              className="text-orange-400 hover:text-orange-300 relative group transition-colors font-medium"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button className="md:hidden text-orange-400 hover:text-orange-300">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
