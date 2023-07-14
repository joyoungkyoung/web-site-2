import { SlideNextSvg, SlidePrevSvg } from '@/components/@svg';
import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';
import { useSwiper } from 'swiper/react';

export default function ApartNav() {
  const swiper = useSwiper();

  const handleClickNavPrev = () => swiper?.slidePrev();
  const handleClickNavNext = () => swiper?.slideNext();

  return (
    <Box
      position={'absolute'}
      display={'flex'}
      justifyContent={'space-between'}
      top={'8vw'}
      zIndex={10}
      width={'100%'}
      padding={'0 15px'}
    >
      <NavButton onClick={handleClickNavPrev}>
        <SlidePrevSvg />
      </NavButton>
      <NavButton onClick={handleClickNavNext}>
        <SlideNextSvg />
      </NavButton>
    </Box>
  );
}

const NavButton = styled(IconButton)`
  width: 35px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.1);
`;
