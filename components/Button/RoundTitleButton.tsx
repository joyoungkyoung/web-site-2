import { Box, Button, ButtonPropsColorOverrides, Typography, useMediaQuery } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { PropsWithChildren } from 'react';
import { breakpoints } from '@/styles/mixins';
import { ArrowRightSvg } from '../@svg';
import { CustomButtonProps } from './Button.type';

interface RoundTitleButtonProps extends PropsWithChildren, CustomButtonProps {
  color?: OverridableStringUnion<
    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    ButtonPropsColorOverrides
  >;
}
export default function RoundTitleButton({ children, hide, color = 'black', onClick }: RoundTitleButtonProps) {
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet}px)`);
  const textColor = color === 'black' ? '#ffffff' : undefined;

  return (
    <Button
      variant="contained"
      color={color}
      sx={{
        borderRadius: '50px',
        width: 'inherit',
        height: matchTablet ? '50px' : '70px',
        minWidth: '64px',
        padding: matchTablet ? '0 20px' : '0 30px',
        opacity: hide ? 0 : 1,
        boxShadow: 'none',
      }}
      onClick={onClick}
      disabled={hide}
    >
      <Typography variant={matchTablet ? 'body2' : 'body1'} fontWeight={'bold'} color={textColor}>
        {children}
      </Typography>
      <Box width={'10px'} />
      <ArrowRightSvg color={textColor} />
    </Button>
  );
}
