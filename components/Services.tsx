// components/Services.tsx
"use client";

import React from "react";
import { motion } from "framer-motion"; // ← ADD THIS LINE
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-6xl text-orange-500" />,
      title: "WEB DESIGN",
      description:
        "Crafting visually appealing and user-friendly interfaces to enhance online experiences.",
    },
    {
      icon: <FaLaptopCode className="text-6xl text-orange-500" />,
      title: "WEB DEVELOPMENT",
      description:
        "Building innovative full-stack applications that deliver seamless functionality.",
    },
    {
      icon: <FaMobileAlt className="text-6xl text-orange-500" />,
      title: "RESPONSIVE WEB APP",
      description:
        "Creating responsive web applications that provide a consistent user experience on any device.",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 px-6 max-w-7xl mx-auto bg-black text-white"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
          My Services
        </h2>
      </div>

      {/* 3 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative bg-gray-900/50 border border-gray-800 rounded-3xl p-10 md:p-12 text-center hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
          >
            <div className="mb-8 flex justify-center">{service.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-8 h-1 w-16 mx-auto bg-orange-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
