import { IconButton, styled } from '@mui/material';
import { PropsWithChildren } from 'react';
import { CustomButtonProps } from './Button.type';

interface IconButtonBaseProps extends PropsWithChildren, CustomButtonProps {}
export default function IconButtonBase({ onClick, children, hide }: IconButtonBaseProps) {
  return (
    <Base onClick={onClick} disabled={hide} sx={{ opacity: hide ? 0 : 1 }}>
      {children}
    </Base>
  );
}

const Base = styled(IconButton)`
  padding: 5px;
  width: 35px;
  height: 35px;
`;
