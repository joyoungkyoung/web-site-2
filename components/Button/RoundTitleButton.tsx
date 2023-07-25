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
  height?: string | number;
}
export default function RoundTitleButton({ children, hide, color = 'black', height, onClick }: RoundTitleButtonProps) {
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet}px)`);
  const textColor = color === 'black' ? '#ffffff' : undefined;

  const sx = {
    borderRadius: '50px',
    width: 'inherit',
    height: '70px',
    minWidth: '64px',
    padding: '0 30px',
    opacity: hide ? 0 : 1,
    boxShadow: 'none',
  };

  if (matchLaptop) {
    sx.height = '60px';
  }

  if (matchTablet) {
    sx.height = '50px';
    sx.padding = '0 20px';
  }

  return (
    <Button variant="contained" color={color} sx={sx} onClick={onClick} disabled={hide}>
      <Typography variant={matchTablet ? 'body2' : 'body1'} fontWeight={'bold'} color={textColor}>
        {children}
      </Typography>
      <Box width={'10px'} />
      <ArrowRightSvg color={textColor} />
    </Button>
  );
}
