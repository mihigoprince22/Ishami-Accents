"use client";
import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "dark" | "light" | "adaptive";
  className?: string;
  showSubtitle?: boolean;
  layout?: "horizontal" | "stacked";
}

export const IshamiAccentsLogo: React.FC<LogoProps> = ({
  variant = "adaptive",
  className = "",
  showSubtitle = true,
  layout = "horizontal",
}) => {
  const primaryColor =
    variant === "light"
      ? "text-[#FAF7F2]"
      : variant === "dark"
      ? "text-[#1B3B2B]"
      : "text-current";

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`group inline-flex ${
        layout === "stacked" ? "flex-col text-center gap-2 items-center" : "items-center gap-3.5"
      } select-none cursor-pointer transition-colors duration-500 ${primaryColor} ${className}`}
    >
      {/* Reactive Animated SVG Emblem */}
      <div className="relative flex items-center justify-center w-11 h-12 md:w-12 md:h-14 shrink-0">
        <svg
          viewBox="0 0 64 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Vertical Dashed Architectural Blueprint Axis (Extends above arch & below base) */}
          <motion.line
            x1="32"
            y1="2"
            x2="32"
            y2="68"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="3 4"
            className="opacity-55"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 0.55, transition: { duration: 0.8, delay: 0.2 } },
              hover: { opacity: 0.85 },
            }}
          />

          {/* Outer Architectural Archway Frame */}
          <motion.path
            d="M12 58V28C12 16.402 20.9543 7 32 7C43.0457 7 52 16.402 52 28V58"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            variants={{
              initial: { pathLength: 0, opacity: 0 },
              animate: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.1, ease: "easeInOut" },
              },
              hover: { scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } },
            }}
            style={{ originX: "32px", originY: "58px" }}
          />

          {/* Upper-Right Warm Terracotta Sun / Accent Orb */}
          <motion.circle
            cx="40.5"
            cy="22.5"
            r="5.5"
            fill="#C86D51"
            variants={{
              initial: { scale: 0, opacity: 0 },
              animate: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 220, damping: 14, delay: 0.45 },
              },
              hover: {
                scale: 1.18,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 12 },
              },
            }}
          />

          {/* Multi-Leafed Botanical Stem (Sways organically on hover) */}
          <motion.g
            style={{ originX: "36px", originY: "56px" }}
            variants={{
              initial: { opacity: 0, scale: 0.9, rotate: 4 },
              animate: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.9, ease: "easeOut", delay: 0.25 },
              },
              hover: {
                rotate: -5,
                scale: 1.04,
                transition: { type: "spring", stiffness: 180, damping: 12 },
              },
            }}
          >
            {/* Main Curving Stem */}
            <path
              d="M37 56C35.5 46 30 35 23 21"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Top-Left Leaf */}
            <path
              d="M28 31C23.5 28 21.5 22 23 18C27 20.5 29.5 25.5 28 31Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Middle-Left Leaf */}
            <path
              d="M31.5 39.5C24.5 36.5 19.5 31 18 26.5C23.5 28.5 29 33 31.5 39.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Lower-Left Leaf */}
            <path
              d="M34.5 47.5C27.5 46.5 22.5 42.5 21 38.5C26.5 39.5 32 43 34.5 47.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Upper-Right Leaf */}
            <path
              d="M31 37C31.5 31 33.5 26 33 22.5C36 26.5 35.5 32.5 31 37Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Lower-Right Leaf */}
            <path
              d="M35.5 49C36 43.5 39 39 39.5 35C41.5 39.5 40 45 35.5 49Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.g>

          {/* Warm Terracotta Horizontal Pedestal Base Bar */}
          <motion.path
            d="M8 61H56"
            stroke="#C86D51"
            strokeWidth="3.6"
            strokeLinecap="round"
            variants={{
              initial: { scaleX: 0, opacity: 0 },
              animate: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.7, ease: "easeOut", delay: 0.35 },
              },
              hover: { scaleX: 1.08, transition: { duration: 0.3 } },
            }}
            style={{ originX: "32px", originY: "61px" }}
          />
        </svg>
      </div>

      {/* Typography Lockup with Stylized Architectural 'Λ' */}
      <div className={`flex flex-col leading-none ${layout === "stacked" ? "items-center" : ""}`}>
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-lg md:text-[21px] font-bold tracking-[0.2em] uppercase inline-flex items-baseline">
            ISH
            <span className="inline-block font-extrabold text-[#C86D51] group-hover:text-current transition-colors duration-500 mx-[1px]">
              Λ
            </span>
            MI
          </span>
          <span className="font-serif italic text-xl md:text-[23px] font-normal text-[#C86D51] tracking-wide transition-all duration-500 group-hover:tracking-wider">
            Accents
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] opacity-75 mt-1.5 font-sans">
            By Ishami Design • Kigali
          </span>
        )}
      </div>
    </motion.div>
  );
};
export default IshamiAccentsLogo;
