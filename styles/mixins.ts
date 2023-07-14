import { css } from '@emotion/react';

type Breakpoint = 'tablet' | 'laptop' | 'desktop';
const breakpoints: { [key in Breakpoint]: string } = {
  tablet: '900px',
  laptop: '1200px',
  desktop: '1400px',
};

const init: { [key in Breakpoint]: Function } = {
  tablet: () => {},
  laptop: () => {},
  desktop: () => {},
};
const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key as Breakpoint] = (...args: any) => css`
    @media (max-width: ${breakpoints[key as Breakpoint]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, init);

export { media, breakpoints };
