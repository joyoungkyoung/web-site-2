import { AdornButton, CloseButton, UploadButton, PrevButton } from '@/components';
import { ArrowDownSvg } from '@/components/@svg';
import { Backdrop, Box, Button, Typography, styled } from '@mui/material';
import { useState } from 'react';

export default function DetailHeader() {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleOpenDropdown = () => setOpenDropdown(true);
  const handleCloseDropdown = () => setOpenDropdown(false);

  return (
    <Box>
      <HeaderBox>
        <PrevButton />
        <AdornButton onClick={handleOpenDropdown} icon={<ArrowDownSvg />}>
          거실(1)
        </AdornButton>
        <UploadButton />
      </HeaderBox>
      <Backdrop
        open={openDropdown}
        sx={{ alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        {/* 최상단 */}
        <HeaderBox>
          <PrevButton hide />
          <AdornButton icon={<ArrowDownSvg />}>거실(1)</AdornButton>
          <CloseButton onClick={handleCloseDropdown} />
        </HeaderBox>
        {/* 드롭다운 */}
        <DropdownWrapper>
          <Button color="inherit" sx={{ width: '100%', height: '50px' }}>
            <Typography fontWeight={700}>거실(8)</Typography>
          </Button>
          <Button color="inherit" sx={{ width: '100%', height: '50px' }}>
            <Typography fontWeight={700}>거실(8)</Typography>
          </Button>
          <Button color="inherit" sx={{ width: '100%', height: '50px' }}>
            <Typography fontWeight={700}>거실(8)</Typography>
          </Button>
        </DropdownWrapper>
      </Backdrop>
    </Box>
  );
}

const HeaderBox = styled(Box)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
`;

const DropdownWrapper = styled(Box)`
  padding: 13px 0;
  background-color: #ffffff;
  width: 100%;
`;
