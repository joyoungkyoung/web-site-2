import { Box, Button, IconButton, Link, styled } from '@mui/material';
import { LogoSvg } from '@/svg';
import { Badge } from '@/components';
import RoutesString from '@/utils/RoutesString';

const MENU_ITEMS = [
  { title: '포트폴리오', href: RoutesString.Portfolio, isBadge: false },
  { title: '서비스 소개', href: '', isBadge: false },
  { title: '읽을거리', href: '', isBadge: false },
  { title: '상담 신청', href: '', isBadge: true },
];

export default function LargeHeader() {
  return (
    <>
      <IconButton size="small" sx={{ padding: 0, height: '50px', borderRadius: '50px' }}>
        <Link href="/">
          <LogoSvg />
        </Link>
      </IconButton>
      <MenuItems>
        {MENU_ITEMS.map((menu, index) => (
          <Button key={index} color="inherit">
            <Link href={menu.href}>
              <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '4px' }}>
                {menu.title}
                {menu.isBadge && <Badge>EASY</Badge>}
              </Box>
            </Link>
          </Button>
        ))}
      </MenuItems>
    </>
  );
}

const MenuItems = styled(Box)`
  display: flex;
  > button {
    display: flex;
    align-items: center;
    padding: 0px 20px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: normal;
    border-radius: 50px;
    column-gap: 5px;
  }
`;
