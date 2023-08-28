import React from "react";

export default function CloseIcon({ size = 24, color = "currentColor", fill }) {
    return (
      <svg
      fill={fill ? fill : "none"}
      stroke={color}
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
