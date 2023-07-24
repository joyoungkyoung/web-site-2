import React from 'react';

interface ArrowRightSvgProps {
  color?: string;
}
export default function ArrowDownSvg({ color = '#000000' }: ArrowRightSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
      fill="none"
      viewBox="0 0 15 12"
      style={{
        transform: 'rotate3d(0, 0, 1, 90deg)',
      }}
    >
      <path stroke={color} strokeWidth="1.5" d="M6.052 11.292l5.204-5.204L6.052.772"></path>
    </svg>
  );
}
