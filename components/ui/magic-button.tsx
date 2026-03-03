// components/ui/magic-button.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
}

export const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
  className = "",
}: MagicButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black",
        className,
      )}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#3b82f6_25%,#ec4899_50%,#a855f7_75%,#a855f7_100%)]" />

      {/* Button content */}
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors",
          otherClasses,
        )}
      >
        {position === "left" && icon && <span className="mr-2">{icon}</span>}
        {title}
        {position === "right" && icon && <span className="ml-2">{icon}</span>}
      </span>
    </motion.button>
  );
};
