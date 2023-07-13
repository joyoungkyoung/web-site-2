import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

interface WrapperProps extends PropsWithChildren {}
export default function Wrapper({ children }: WrapperProps) {
  return <Box sx={{ position: 'relative', top: '-120px' }}>{children}</Box>;
}
