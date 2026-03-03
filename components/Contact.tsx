"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-7xl mx-auto bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-tight">
          Contact Me
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          Let's work together — I'm open to new opportunities!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 transition-shadow">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get in Contact me
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:belaynewzewdie90@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/40 transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">belaynewzewdie90@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+251912345678"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/40 transition-colors">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+251 954454027</p>
                </div>
              </a>

              <div className="flex gap-6 mt-8">
                <a
                  href="https://www.linkedin.com/in/belaynew-zewdie-65574633a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYc7Ur5gLS3KY8n1%2BsDq72A%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com/belaynewzewdie90-boop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  title="GitHub"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Simple Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/60 border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500 resize-none"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/30 flex items-center justify-center gap-3"
            >
              Send Message
              <FaArrowRight />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
