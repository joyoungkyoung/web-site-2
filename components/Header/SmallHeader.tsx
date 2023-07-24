import { Box, Button, Dialog, IconButton, Link, Typography, styled } from '@mui/material';
import { ArrowRightSvg, CloseSvg, HamburgerSvg, LogoSmallSvg } from '@/svg';
import { useState } from 'react';
import RoutesString from '@/utils/RoutesString';

type Menu = {
  title: string;
  href: string;
};
const MENU_ITEMS1: Menu[] = [
  { title: '서비스 소개', href: '' },
  { title: '포트폴리오', href: RoutesString.Portfolio },
  { title: '읽을거리', href: '' },
  { title: '아파트멘터리 브랜드', href: '' },
];

const MENU_ITEMS2: Menu[] = [
  { title: '회사 소개', href: '' },
  { title: '직영점 안내', href: '' },
  { title: '자주 묻는 질문', href: '' },
];

export default function SmallHeader() {
  const [openMene, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => setOpenMenu(!openMene);

  const renderMenuItem = (menu: Menu, index: number) => (
    <MenuItem key={index} color={'inherit'} onClick={() => (window.location.href = menu.href)}>
      <Typography>{menu.title}</Typography>
      <ArrowRightSvg />
    </MenuItem>
  );

  return (
    <>
      <IconButton>
        <Link href="/">
          <LogoSmallSvg />
        </Link>
      </IconButton>
      <IconButton onClick={handleToggleMenu}>
        <HamburgerSvg />
      </IconButton>
      <Dialog open={openMene} fullScreen>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
          <Box>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              padding={'0 10px'}
              minHeight={'65px'}
            >
              <IconButton>
                <Link href="/">
                  <LogoSmallSvg />
                </Link>
              </IconButton>
              <IconButton onClick={handleToggleMenu}>
                <CloseSvg />
              </IconButton>
            </Box>
            <Box height={'35px'} />
            <Devide />
            <MenuItems>{MENU_ITEMS1.map((menu, index) => renderMenuItem(menu, index))}</MenuItems>
            <Devide />
            <MenuItems>{MENU_ITEMS2.map((menu, index) => renderMenuItem(menu, index))}</MenuItems>
            <Devide />
          </Box>
          <Button variant="contained" color="primary" sx={{ borderRadius: 0, height: '60px', width: '100%' }}>
            상담 신청
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

const Devide = styled(Box)`
  margin: 0 27.5px;
  height: 1px;
  background-color: #e2e2e2;
`;

const MenuItems = styled(Box)`
  padding: 27.5px 0;
`;

const MenuItem = styled(Button)`
  width: 100%;
  height: 48px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  > p {
    font-weight: 700;
    font-size: 18px;
  }
`;
