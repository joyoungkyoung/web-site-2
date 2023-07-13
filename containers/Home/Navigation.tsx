import { useState } from 'react';
import { SlideNextSvg, SlidePrevSvg } from '@/svg';
import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';
import { SwiperClass, useSwiper } from 'swiper/react';
import { BANNER_ITEMS } from './Home.constant';

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useSwiper();

  const handleClickNavPrev = () => swiper?.slidePrev();
  const handleClickNavNext = () => swiper?.slideNext();

  swiper.on('slideChange', (_swiper: SwiperClass) => {
    setActiveIndex(_swiper.realIndex);
  });

  return (
    <NavWrapper>
      <NavButton onClick={handleClickNavPrev}>
        <SlidePrevSvg color={swiper && BANNER_ITEMS[activeIndex]?.color} />
      </NavButton>
      <NavButton onClick={handleClickNavNext}>
        <SlideNextSvg color={swiper && BANNER_ITEMS[activeIndex]?.color} />
      </NavButton>
    </NavWrapper>
  );
}

const NavWrapper = styled(Box)`
  position: absolute;
  top: calc(200px + 16.5vw);
  left: 60%;
  display: flex;
  gap: 10px;
  z-index: 3;
`;

const NavButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;
