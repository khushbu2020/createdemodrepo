import React from "react";
import { useColor } from "../contexts/ColorProvider";

const HomeActiveIcon = () => {
  const { currentColor } = useColor();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20C1.34315 20 0 18.6569 0 17V9.33613C0 8.48567 0.360964 7.67518 0.993106 7.10625L7.9931 0.806251C9.13402 -0.220572 10.866 -0.220574 12.0069 0.80625L19.0069 7.10625C19.639 7.67518 20 8.48567 20 9.33613V17C20 18.6569 18.6569 20 17 20H3ZM7 20V12C7 11.4478 7.44772 11 8 11H12C12.5523 11 13 11.4478 13 12V20H7Z"
        fill={currentColor || "#F37423"}
      />
    </svg>
  );
};

export default HomeActiveIcon;
