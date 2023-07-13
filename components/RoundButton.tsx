import { Button, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { ArrowRightSvg } from './@svg';

interface RoundButtonProps extends PropsWithChildren {}
export default function RoundButton({ children }: RoundButtonProps) {
  return (
    <Button
      sx={{
        borderRadius: '50px',
        backgroundColor: '#000000',
        width: 'inherit',
        height: '70px',
        minWidth: '64px',
        padding: '0 30px',
        ':hover': {
          backgroundColor: '#0d0d07',
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
        },
      }}
    >
      <Typography sx={{ color: '#ffffff' }}>{children}</Typography>
      <ArrowRightSvg color="#ffffff" />
    </Button>
  );
}
