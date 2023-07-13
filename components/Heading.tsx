import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface HeadingProps extends PropsWithChildren {
  t: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: string;
  lineHeight?: string;
  color?: string;
}
export default function Heading({ t, fontSize, lineHeight, color, children }: HeadingProps) {
  return (
    <Typography
      variant={t}
      sx={{
        fontWeight: 700,
        whiteSpace: 'pre-wrap',
        wordBreak: 'keep-all',
      }}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
    >
      {children}
    </Typography>
  );
}
