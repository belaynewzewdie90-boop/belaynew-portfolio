"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FloatingNavbar from "@/components/FloatingNavbar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";

// Floating tech icons (same as before)
const floatingTech = [
  {
    icon: <FaHtml5 />,
    color: "#e34f26",
    name: "HTML",
    x: -140,
    y: -80,
    floatSpeed: 3,
  },
  {
    icon: <FaCss3Alt />,
    color: "#1572b6",
    name: "CSS",
    x: 160,
    y: -60,
    floatSpeed: 2.5,
  },
  {
    icon: <FaJsSquare />,
    color: "#f0db4f",
    name: "JS",
    x: -180,
    y: 40,
    floatSpeed: 4,
  },
  {
    icon: <SiTailwindcss />,
    color: "#38bdf8",
    name: "Tailwind",
    x: 120,
    y: 80,
    floatSpeed: 3.2,
  },
  {
    icon: <FaReact />,
    color: "#61dafb",
    name: "React",
    x: 200,
    y: 10,
    floatSpeed: 3.8,
  },
  {
    icon: <FaNodeJs />,
    color: "#68a063",
    name: "Node.js",
    x: -80,
    y: 120,
    floatSpeed: 2.8,
  },
  {
    icon: <SiMongodb />,
    color: "#47a248",
    name: "MongoDB",
    x: 140,
    y: 140,
    floatSpeed: 4.2,
  },
  {
    icon: <SiMysql />,
    color: "#4479a1",
    name: "MySQL",
    x: -60,
    y: -140,
    floatSpeed: 3.5,
  },
  {
    icon: <SiNextdotjs />,
    color: "#ffffff",
    name: "Next.js",
    x: -200,
    y: -20,
    floatSpeed: 3.0,
  },
];

// Social links
const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/belaynewzewdie90-boop",
    color: "#fff",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/belaynew-zewdie-65574633a/",
    color: "#0077b5",
    label: "LinkedIn",
  },
];

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation (infinite loop)
  useEffect(() => {
    const text = "Belaynew Z";
    let index = 0;
    let direction = 1; // 1 typing, -1 deleting
    const interval = setInterval(() => {
      if (direction === 1) {
        if (index < text.length) {
          setDisplayedName(text.slice(0, index + 1));
          index++;
        } else {
          setTimeout(() => (direction = -1), 2000);
        }
      } else {
        if (index > 0) {
          setDisplayedName(text.slice(0, index - 1));
          index--;
        } else {
          direction = 1;
        }
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle network (canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.6)";
        ctx.fill();

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-gray-950 text-white overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
      />

      {/* Spotlight */}
      <motion.div
        className="absolute pointer-events-none z-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      <FloatingNavbar />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - TEXT */}
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-orange-400 text-xl md:text-2xl font-medium tracking-widest mb-4"
            >
              HI THERE!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                {displayedName}
              </span>
              <span className="animate-blink ml-1 text-7xl">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-300 mb-6"
            >
              A Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed mb-8"
            >
              I'm open to freelance collaborations!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-orange-500/30 transition-shadow"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewWork}
                className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-bold rounded-full hover:bg-orange-400/10 transition-colors"
              >
                View Work
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="flex gap-4 mt-8"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-3xl text-gray-300 hover:text-white transition-colors"
                  style={{ color: social.color }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - CIRCULAR AVATAR + FLOATING ICONS */}
          <div className="relative flex justify-center items-center">
            {/* Circular image with glow and float animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="relative z-10"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse" />

              {/* Image container - fixed size circle */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10"
              >
                <img
                  src="/hello.jpg"
                  alt="Belaynew Z"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating tech icons (positions unchanged – adjust if needed) */}
            {floatingTech.map((tech, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl md:text-5xl pointer-events-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x: tech.x, y: tech.y }}
                transition={{
                  duration: 1.8,
                  delay: 2.5 + i * 0.15,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: tech.floatSpeed,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{ color: tech.color }}
                  title={tech.name}
                >
                  {tech.icon}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>

      {/* Global styles */}
      <style jsx global>{`
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
