"use client";

import GradientBg from "@/components/GradientBg";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/FloatingNavbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { BentoGrid, BentoGridItem } from "@/components/Grid";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Real-time weather companion with city search, temperature, humidity, wind speed, pressure, visibility, and dynamic UI.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
      image: "/projects/weather-app.jpg",
      github: "https://github.com/belaynewzewdie90-boop/Weather-App",
      live: "https://belaynewzewdie90-boop.github.io/Weather-App/",
    },
    {
      id: 2,
      title: "MovieDB (MoveDB)",
      description:
        "Movie discovery platform with search for titles, actors, artists, trending posters, and detailed info.",
      tech: ["React", "TypeScript", "Tailwind CSS", "TMDB API"],
      image: "/projects/moviedb.jpg",
      github: "https://github.com/belaynewzewdie90-boop/MoveDB",
      live: "https://belaynewzewdie90-boop.github.io/MoveDB/",
    },
    {
      id: 3,
      title: "React Admin Dashboard",
      description:
        "Admin panel for product management with stock, price, status, edit/delete, notifications, and analytics.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "/projects/admin-dashboard.jpg",
      github: "https://github.com/belaynewzewdie90-boop/react-admin",
      live: "https://belaynewzewdie90-boop.github.io/react-admin",
    },
    {
      id: 4,
      title: "Job Portal Application",
      description:
        "Job listing and posting platform with navigation, search, and post job functionality.",
      tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
      image: "/projects/job-portal.jpg",
      github: "https://github.com/belaynewzewdie90-boop/Job-Application",
      live: "https://belaynewzewdie90-boop.github.io/Job-Application",
    },
  ];

  return (
    <GradientBg>
      {/* Top anchor for "Home" scroll */}
      <div id="top">
        <FloatingNavbar />
        <Hero />
      </div>

      {/* About Me */}
      <section
        id="about"
        className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <About />
      </section>

      {/* Education */}
      <section
        id="education"
        className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50"
      >
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                BSc in Electronics and Communication Engineering
              </h3>
              <span className="text-lg sm:text-xl text-gray-400 mt-2 md:mt-0">
                2021 – 2025
              </span>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 mb-3 md:mb-4">
              Adama Science and Technology University, Adama, Ethiopia
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I am committed to continuous learning and personal growth,
              equipping myself with the skills and knowledge needed to thrive in
              the ever-evolving tech industry. My academic journey has laid a
              solid foundation in software development, problem-solving, and
              teamwork, which I continually build upon through hands-on projects
              and self-guided study.
            </p>
            <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/30 rounded-full text-purple-300 text-sm sm:text-base">
                GPA 3.8/4.0
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/30 rounded-full text-purple-300 text-sm sm:text-base">
                Dean's List 2020–2022
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black"
      >
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
            My Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {[
            {
              icon: <FaCode className="text-5xl sm:text-6xl text-orange-500" />,
              title: "WEB DESIGN",
              desc: "Crafting visually appealing and user-friendly interfaces to enhance online experiences.",
            },
            {
              icon: (
                <FaLaptopCode className="text-5xl sm:text-6xl text-orange-500" />
              ),
              title: "WEB DEVELOPMENT",
              desc: "Building innovative full-stack applications that deliver seamless functionality.",
            },
            {
              icon: (
                <FaMobileAlt className="text-5xl sm:text-6xl text-orange-500" />
              ),
              title: "RESPONSIVE WEB APP",
              desc: "Creating responsive web applications that provide a consistent user experience on any device.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="mb-6 sm:mb-8 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-6 sm:mt-8 h-1 w-12 sm:w-16 mx-auto bg-orange-500 rounded-full group-hover:w-20 sm:group-hover:w-24 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black"
      >
        <Skills />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20"
      >
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
            My Recent Projects
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
            Personal & Freelance Projects
          </p>
        </div>

        <BentoGrid>
          {projects.map((project) => (
            <BentoGridItem
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
              className={
                project.id === 1 || project.id === 4
                  ? "col-span-1 md:col-span-2 lg:col-span-2"
                  : "col-span-1"
              }
            />
          ))}
        </BentoGrid>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50"
      >
        <Contact />
      </section>
    </GradientBg>
  );
}
