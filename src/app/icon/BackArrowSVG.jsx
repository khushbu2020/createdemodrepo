import React from "react";

const BackArrowSVG = ({ color, bgcolor }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      bgcolor={bgcolor}
    >
      <path
        d="M9.57024 18.0697L3.50024 11.9997L9.57024 5.92969"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5002 12L3.67017 12"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackArrowSVG;
