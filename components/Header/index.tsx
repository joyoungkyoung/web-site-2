import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Box, useMediaQuery } from '@mui/material';
import { breakpoints, media } from '@/styles/mixins';
import RoutesString from '@/utils/RoutesString';
import { useWindowScroll } from 'react-use';
import { useEffect, useRef } from 'react';
import SmallHeader from './SmallHeader';
import LargeHeader from './LargeHeader';

export default function Header() {
  const { y } = useWindowScroll();
  const router = useRouter();
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet}px)`);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.backgroundColor = y > 150 ? '#ffffff' : 'transparent';
    }
  }, [y]);

  const isHideHeader = router.pathname === RoutesString.PortfolioDetail && matchLaptop;

  if (isHideHeader) return null;

  return <CustomHeader ref={headerRef}>{matchTablet ? <SmallHeader /> : <LargeHeader />}</CustomHeader>;
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

  ${media.tablet`
    height:65px;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
  `}
`;
