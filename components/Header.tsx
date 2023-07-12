import { media } from '@/styles/mixins';
import { LogoSvg } from '@/svg/index';
import styled from '@emotion/styled';
import { Box, Button, IconButton, Typography } from '@mui/material';

export default function Header() {
  return (
    <CustomHeader>
      <IconButton aria-label="logo" size="small" sx={{ padding: 0, height: '50px', borderRadius: '50px' }}>
        <LogoSvg />
      </IconButton>
      <MenuItems>
        <Button color="inherit">포트폴리오</Button>
        <Button color="inherit">서비스 소개</Button>
        <Button color="inherit">읽을거리</Button>
        <Button color="inherit">
          <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '4px' }}>
            상담 신청
            <Badge>
              <Typography>EASY</Typography>
            </Badge>
          </Box>
        </Button>
      </MenuItems>
    </CustomHeader>
  );
}

const CustomHeader = styled.header`
  position: sticky;
  top: 0px;
  height: 118px;
  display: flex;
  padding-left: 40px;
  column-gap: 100px;
  align-items: center;
  background-color: transparent;

  ${media.laptop`
    column-gap: 30px;
  `}
`;

const MenuItems = styled.div`
  display: flex;
  > button {
    display: flex;
    align-items: center;
    padding: 0px 25px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: normal;
    border-radius: 50px;
    column-gap: 5px;
  }
`;

const Badge = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #feeb8f;
  padding: 5px 8px;
  border-radius: 20px;
  height: 24px;
  margin: 0px;
  > p {
    font-weight: 600;
    font-size: 8px;
  }
`;
