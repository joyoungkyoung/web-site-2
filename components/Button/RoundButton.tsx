import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Heading } from '@/components';
import { PropsWithChildren } from 'react';
import { CustomButtonProps } from './Button.type';

interface RoundButtonProps extends PropsWithChildren, CustomButtonProps {
  color?: 'black' | 'gray';
}
export default function RoundButton({ children, color = 'black', onClick, hide }: RoundButtonProps) {
  return (
    <CustomButton
      variant="outlined"
      color="inherit"
      sx={
        color === 'gray'
          ? {
              color: '#808080',
              borderColor: '#E2E2E2',
              opacity: hide ? 0 : 1,
            }
          : { opacity: hide ? 0 : 1 }
      }
      onClick={onClick}
      disabled={hide}
    >
      <Heading t="body2">{children}</Heading>
    </CustomButton>
  );
}

const CustomButton = styled(Button)`
  border-radius: 40px;
  padding: 0 20px;
  height: 40px;
`;
