// components/GradientBg.tsx
"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface GradientBgProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBg({
  children,
  className = "",
}: GradientBgProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Animated radial gradient following mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),  // purple center
              rgba(59, 130, 246, 0.08),   // blue edge
              transparent 70%
            )
          `,
        }}
      />

      {/* Second layer for more depth (blended) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              1000px circle at ${mouseX}px ${mouseY}px,
              rgba(236, 72, 153, 0.1),    // pink accent
              transparent 80%
            )
          `,
        }}
      />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 min-h-screen">{children}</div>
    </div>
  );
}
