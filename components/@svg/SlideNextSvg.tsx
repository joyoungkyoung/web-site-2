import React from 'react';

interface SlideNextSvgProps {
  color?: string;
}
function SlideNextSvg({ color = '#000000' }: SlideNextSvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none" viewBox="0 0 20 17">
      <path
        fill={color}
        d="M20 8.5L11.312 17l-1.143-1.118 6.736-6.591H0V7.709h16.905L10.17 1.12 11.312 0 20 8.5z"
      ></path>
    </svg>
  );
}

export default SlideNextSvg;
