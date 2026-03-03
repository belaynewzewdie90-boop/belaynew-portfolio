"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

// ---------- Types ----------
interface Skill {
  icon: JSX.Element;
  name: string;
  color: string; // for gradient border
}

// ---------- Constants ----------
const SKILLS: Skill[] = [
  { icon: <FaHtml5 />, name: "HTML", color: "#e34f26" },
  { icon: <FaCss3Alt />, name: "CSS", color: "#1572b6" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
  { icon: <SiExpress />, name: "Express", color: "#ffffff" },
  { icon: <SiMysql />, name: "MySQL", color: "#4479a1" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
  { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952b3" },
  { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 max-w-7xl mx-auto bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
          My Skills
        </h2>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            {/* Gradient border card */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              style={{
                background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}80)`,
              }}
            />
            <div
              className="relative p-6 h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 group-hover:border-transparent transition-all duration-300 flex flex-col items-center text-center"
              style={{
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Icon with continuous gentle float */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="text-6xl mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              {/* Subtle underline on hover */}
              <div
                className="w-0 group-hover:w-12 h-0.5 mt-2 transition-all duration-300"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: "And more..." footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center text-gray-500 mt-12 text-lg"
      ></motion.p>
    </section>
  );
}
