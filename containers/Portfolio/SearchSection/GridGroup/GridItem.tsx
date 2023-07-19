import { CheckSvg } from '@/components/@svg';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface GridItemProps extends PropsWithChildren {
  checked?: boolean;
  onClick?: () => void;
}
export default function GridItem({ checked, children, onClick }: GridItemProps) {
  const typoProperties = checked
    ? {
        fontWeight: 700,
        color: '#000000',
      }
    : {
        fontWeight: 400,
        color: '#808080',
      };

  return (
    <Grid item width={'100%'}>
      <ItemButton color="inherit" onClick={onClick}>
        <Box display={'flex'} alignItems={'center'} gap={'4px'}>
          <Typography variant="body2" {...typoProperties}>
            {children}
          </Typography>
          {checked && <CheckSvg />}
        </Box>
      </ItemButton>
    </Grid>
  );
}

const ItemButton = styled(Button)`
  padding: 0;
  justify-content: flex-start;
  p {
    text-align: left;
  }
`;
