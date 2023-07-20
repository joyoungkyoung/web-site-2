import { Box, Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface BadgeProps extends PropsWithChildren {}
export default function Badge({ children }: BadgeProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItem: 'center',
        backgroundColor: theme.palette.primary.main,
        padding: '5px 8px',
        borderRadius: '20px',
        height: '24px',
        margin: '0px',
      }}
    >
      <Typography fontWeight={600} fontSize={'8px'} fontFamily={'var(--font-decimal)'}>
        {children}
      </Typography>
    </Box>
  );
}
