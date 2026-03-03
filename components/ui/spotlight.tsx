import React from "react";
import { cn } from "@/lib/cn"; // or "@/lib/utils"

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill = "white",
}) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] w-full lg:w-2/5 opacity-0",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="spotlight-blur"
          x="0"
          y="0"
          width="3787"
          height="2842"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" />
        </filter>
      </defs>

      <g filter="url(#spotlight-blur)">
        <ellipse
          cx="1933.5"
          cy="602.5"
          rx="1933.5"
          ry="602.5"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.5 2291.5)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
    </svg>
  );
};
