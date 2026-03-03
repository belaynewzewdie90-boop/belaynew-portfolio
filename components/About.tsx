// components/About.tsx
"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 max-w-7xl mx-auto bg-black text-white relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left – Larger Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-500">
            <img
              src="/belay.jpg" // ← your photo (place in public/)
              alt="Belaynew Z"
              className="w-full h-full object-cover"
            />

            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Outer pulse ring */}
            <div className="absolute inset-[-6px] rounded-full border-2 border-purple-500/30 animate-pulse-slow" />
          </div>
        </motion.div>

        {/* Right – Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8 text-center md:text-left"
        >
          {/* Greeting + Name */}

          {/* Bio */}
          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-6">
            <p>
              Hello, I'm Belaynew Zewdie, dynamic and detail-oriented Web
              Developer with expertise in full-stack development, specialized in
              React and the MERN stack. Experienced in delivering technical
              solutions, solving complex problems, and leading projects from
              concept to completion. Known for strong work ethics, adaptability,
              and a passion for creating secure, scalable, and user-friendly
              applications. Skilled in fostering team collaboration,
              streamlining operations, and building lasting relationships with
              stakeholders.
            </p>
          </div>

          {/* Stat + Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-10 pt-8">
            <div className="text-4xl md:text-5xl font-bold text-orange-400">
              5 Projects complete
            </div>

            <a
              href="/cv.pdf" // ← replace with your real CV path in /public/
              download
              className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-xl font-medium shadow-xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50"
            >
              PREVIEW-DOWNLOAD CV
              <FaArrowRight className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
