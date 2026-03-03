// components/BentoGrid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  tech?: string[];
  link?: string;
  animation?: string; // for custom reveal animation
}

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  tech = [],
  link,
  animation = "fade-up",
}: BentoGridItemProps) => {
  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },
    "fade-left": {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },
    "fade-right": {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },
    "fade-down": {
      initial: { opacity: 0, y: -40 },
      animate: { opacity: 1, y: 0 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const variant = variants[animation] || variants["fade-up"];

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(168, 85, 247, 0.15)",
      }}
      className={cn(
        "relative rounded-2xl overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300",
        className,
      )}
    >
      {/* Image background */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
        />
      )}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-base flex-grow">{description}</p>
        {/* Tech stack icons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-purple-600/30 rounded-full text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Link */}
        {link && (
          <a
            href={link}
            className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};
