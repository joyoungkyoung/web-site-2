import { PropsWithChildren, JSX } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { CustomButtonProps } from './Button.type';

interface AdornButtonProps extends PropsWithChildren, CustomButtonProps {
  icon?: JSX.Element;
}

export default function AdornButton({ onClick, children, icon }: AdornButtonProps) {
  return (
    <Button color="inherit" sx={{ padding: 0 }} onClick={onClick}>
      <Box display={'flex'} gap={'5px'} alignItems={'center'}>
        <Typography fontWeight={700}>{children}</Typography>
        {icon && icon}
      </Box>
    </Button>
  );
}
