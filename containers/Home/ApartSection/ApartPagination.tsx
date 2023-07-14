import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import { SwiperClass, useSwiper } from 'swiper/react';

interface ApartPaginationProps {
  slidesPerView?: number;
}
export default function ApartPagination({ slidesPerView = 1 }: ApartPaginationProps) {
  const [barWidth, setBarWidth] = useState<number>();
  const swiper = useSwiper();
  const barRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowSize();

  swiper.on('slideChange', (_swiper: SwiperClass) => {
    if (barRef.current && barWidth) {
      barRef.current.style.transform = `translate3d(${barWidth * _swiper.realIndex}px, 0px, 0px)`;
    }
  });

  useEffect(() => {
    if (swiper && barRef.current) {
      const total = swiper.slides?.length - (slidesPerView - 1);

      const width = barRef.current.parentElement?.clientWidth;

      if (width) {
        barRef.current.style.width = `${width / total}px`;
        barRef.current.style.transition = `transform 0.5s ease 0s`;

        setBarWidth(width / total);
      }
    }
  }, [swiper, windowWidth]);

  return (
    <Box position={'relative'}>
      <Box height={'2px'} sx={{ backgroundColor: '#e2e2e2' }} />
      <Box ref={barRef} position={'absolute'} height={'2px'} top={0} sx={{ backgroundColor: '#000000' }} />
    </Box>
  );
}
