import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { PropsWithChildren } from 'react';
import { breakpoints } from '@/styles/mixins';
import { ArrowRightSvg } from './@svg';

interface RoundButtonProps extends PropsWithChildren {}
export default function RoundButton({ children }: RoundButtonProps) {
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet})`);

  return (
    <Button
      sx={{
        borderRadius: '50px',
        backgroundColor: '#000000',
        width: 'inherit',
        height: matchTablet ? '50px' : '70px',
        minWidth: '64px',
        padding: matchTablet ? '0 20px' : '0 30px',
        ':hover': {
          backgroundColor: '#0d0d07',
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
        },
      }}
    >
      <Typography variant={matchTablet ? 'body2' : 'body1'} fontWeight={'bold'} color={'#ffffff'}>
        {children}
      </Typography>
      <Box width={'10px'} />
      <ArrowRightSvg color="#ffffff" />
    </Button>
  );
}
