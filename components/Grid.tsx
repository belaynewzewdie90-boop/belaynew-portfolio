// components/Grid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { FaArrowRight, FaGithub } from "react-icons/fa";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[20rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  className?: string;
}

export const BentoGridItem = ({
  id,
  title,
  description,
  image,
  tech,
  github,
  live,
  className,
}: BentoGridItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300",
        className,
      )}
    >
      {/* Image background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 pointer-events-none" />

      {/* Badge */}
      <div className="absolute top-4 right-4 z-20 bg-purple-600/80 text-white text-xs font-bold px-3 py-1 rounded-full">
        #{id.toString().padStart(2, "0")}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-base flex-grow">{description}</p>

        {/* Tech badges */}
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

        {/* Links */}
        <div className="mt-6 flex gap-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm"
          >
            GitHub <FaGithub size={16} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm"
          >
            View Website <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
