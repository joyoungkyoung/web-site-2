import styled from '@emotion/styled';
import { Box, Switch, SwitchProps, SxProps, Theme, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

interface TextSwitchProps {
  checked?: boolean;
  sx?: SxProps<Theme>;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
export default function TextSwitch({ checked, sx, onChange }: TextSwitchProps) {
  return (
    <Box position={'relative'} sx={sx}>
      <CustomSwitch checked={checked} onChange={onChange} />
      <LabelBox>
        <Label>before</Label>
        <Label>after</Label>
      </LabelBox>
    </Box>
  );
}

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: '110px',
  height: '35px',
  padding: 0,
  borderRadius: '65px',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      left: '35px',
      transform: 'translateX(20px)',
      color: '#13130A',
      '& + .MuiSwitch-track': {
        backgroundColor: '#000000',
        opacity: 0.4,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: '60px',
    height: '35px',
    borderRadius: '65px',
    color: '#ffffff',
  },
  '& .MuiSwitch-track': {
    borderRadius: '7px',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    opacity: 0.4,
  },
}));

const LabelBox = styled(Box)`
  position: absolute;
  top: 0;
  height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  pointer-events: none;
`;
const Label = styled(Typography)`
  width: 55px;
  font-size: 12px;
  font-weight: 500;
  font-family: var(--font-decimal-inline);
`;
