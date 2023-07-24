import { PropsWithChildren, JSX } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { CustomButtonProps } from './Button.type';

interface AdornButtonProps extends PropsWithChildren, CustomButtonProps {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export default function AdornButton({ onClick, children, startIcon, endIcon }: AdornButtonProps) {
  return (
    <Button color="inherit" sx={{ padding: 0 }} onClick={onClick}>
      <Box display={'flex'} gap={'5px'} alignItems={'center'}>
        {startIcon && startIcon}
        <Typography fontWeight={700}>{children}</Typography>
        {endIcon && endIcon}
      </Box>
    </Button>
  );
}
