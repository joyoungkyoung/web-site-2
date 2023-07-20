import { media } from '@/styles/mixins';
import { LogoSvg } from '@/svg';
import styled from '@emotion/styled';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';

export default function Header() {
  const { y } = useWindowScroll();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = y > 150 ? '#ffffff' : 'transparent';
    }
  }, [y]);

  return (
    <CustomHeader ref={headerRef}>
      <IconButton aria-label="logo" size="small" sx={{ padding: 0, height: '50px', borderRadius: '50px' }}>
        <LogoSvg />
      </IconButton>
      <MenuItems>
        <Button color="inherit">
          <Link href="/portfolio">포트폴리오</Link>
        </Button>
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

const CustomHeader = styled(Box)`
  position: sticky;
  top: 0px;
  height: 118px;
  display: flex;
  padding-left: 40px;
  column-gap: 100px;
  align-items: center;
  transition: background-color 0.1s ease-in-out;
  z-index: 10;
  ${media.laptop`
    column-gap: 30px;
  `}
`;

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
    font-family: var(--font-decimal);
  }
`;
