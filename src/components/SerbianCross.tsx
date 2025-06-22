import React from "react";

interface SerbianCrossProps {
  className?: string;
  size?: number;
}

const SerbianCross: React.FC<SerbianCrossProps> = ({
  className = "",
  size = 30,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M10 1L10 27"
        stroke="#D4AF37"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M19 10L0.999999 10"
        stroke="#D4AF37"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 25H8"
        stroke="#D4AF37"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 3L8 3"
        stroke="#D4AF37"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M17 12L17 8"
        stroke="#D4AF37"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 12L3 8"
        stroke="#D4AF37"
        stroke-width="2"
        stroke-linecap="round"
      />{" "}
    </svg>
  );
};

export default SerbianCross;
