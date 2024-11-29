import React from "react";
import { useColor } from "../contexts/ColorProvider";

const OrangeCheckIcon = () => {
  const { currentColor } = useColor();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill={currentColor || "#F37423"} />
      <path
        d="M5.83344 10L8.60843 12.6333L14.1668 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OrangeCheckIcon;
