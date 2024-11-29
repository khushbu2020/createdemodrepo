import React from "react";
import { useColor } from "../contexts/ColorProvider";

const UserActiveIcon = () => {
  const { currentColor } = useColor();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.7137 16.4006C18.0416 16.7351 18.0416 17.265 17.7136 17.5996C16.2617 19.0809 14.2382 20 12.0001 20C9.76186 20 7.73834 19.0809 6.28636 17.5994C5.95845 17.2649 5.95846 16.735 6.28637 16.4004C7.73834 14.9191 9.76181 14 12 14C14.2382 14 16.2617 14.9192 17.7137 16.4006ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        fill={currentColor}
        // fill="#F37423"
      />
    </svg>
  );
};

export default UserActiveIcon;
