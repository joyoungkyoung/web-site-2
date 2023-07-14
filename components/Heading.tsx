import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { PropsWithChildren } from 'react';

interface HeadingProps extends PropsWithChildren {
  t: Variant;
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
