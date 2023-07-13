import React from 'react';

interface SlidePrevSvgProps {
  color?: string;
}
function SlidePrevSvg({ color = '#000000' }: SlidePrevSvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none" viewBox="0 0 20 17">
      <path fill={color} d="M0 8.5L8.688 17l1.143-1.118L3.095 9.29H20V7.709H3.095L9.83 1.12 8.688 0 0 8.5z"></path>
    </svg>
  );
}

export default SlidePrevSvg;
