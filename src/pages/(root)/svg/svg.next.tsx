import React from "react";

interface NextSvgProps {
  color?: string;
  className?: string;
}

export const NextSvg: React.FC<NextSvgProps> = ({
  color = "#ff0000",
  className = "",
}) => {
  return (
    <svg
      fill={color}
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
    </svg>
  );
};
