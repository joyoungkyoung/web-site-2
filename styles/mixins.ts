import { css } from '@emotion/react';

type Breakpoint = 'tablet' | 'laptop' | 'desktop';
const breakpoints: { [key in Breakpoint]: number } = {
  tablet: 900,
  laptop: 1200,
  desktop: 1400,
};

const init: { [key in Breakpoint]: Function } = {
  tablet: () => {},
  laptop: () => {},
  desktop: () => {},
};
const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key as Breakpoint] = (...args: any) => css`
    @media (max-width: ${breakpoints[key as Breakpoint]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, init);

export { media, breakpoints };
