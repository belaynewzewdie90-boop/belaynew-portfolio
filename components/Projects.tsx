"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // optional - remove if you don't use Next.js Image optimization

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Weather App",
    description:
      "Real-time weather companion with city search, temperature, humidity, wind speed, pressure, visibility, and dynamic UI.",
    image: "/projects/weather-app.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Weather-App",
    live: "https://belaynewzewdie90-boop.github.io/Weather-App/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
  },
  {
    title: "MovieDB (MoveDB)",
    description:
      "Movie discovery platform with search for titles, actors, artists, trending posters, and detailed info.",
    image: "/projects/moviedb.jpg",
    github: "https://github.com/belaynewzewdie90-boop/MoveDB",
    live: "https://belaynewzewdie90-boop.github.io/MoveDB/",
    tech: ["React", "TypeScript", "Tailwind CSS", "TMDB API"],
  },
  {
    title: "React Admin Dashboard",
    description:
      "Admin panel for product management with stock, price, status, edit/delete, notifications, and analytics.",
    image: "/projects/admin-dashboard.jpg",
    github: "https://github.com/belaynewzewdie90-boop/react-admin",
    live: "https://belaynewzewdie90-boop.github.io/react-admin",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "Job Portal Application",
    description:
      "Job listing and posting platform with navigation, search, and post job functionality.",
    image: "/projects/job-portal.jpg",
    github: "https://github.com/belaynewzewdie90-boop/Job-Application",
    live: "https://belaynewzewdie90-boop.github.io/Job-Application",
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto bg-black text-white"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
          My Projects
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Recent work — built with modern tools and clean code
        </p>
      </motion.div>

      {/* Grid - compact cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-black/60 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            {/* Square image container */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2} // load first two faster
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Hover "View in website" button */}
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 right-4 p-3 bg-purple-600 rounded-full text-white shadow-lg hover:bg-purple-700 transition-colors z-10"
                aria-label="View in website"
              >
                <FaArrowRight size={18} />
              </motion.a>
            </div>

            {/* Content - smaller */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech badges - compact */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-purple-600/30 rounded-full text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaArrowRight size={16} />
                  View in website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
