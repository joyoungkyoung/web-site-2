import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { BANNER_ITEMS } from '../Home.constant';
import Banner from './Banner';
import BannerNav from './BannerNav';

export default function BannerSection() {
  return (
    <Box position={'relative'} top={'-120px'}>
      <Swiper
        slidesPerView={'auto'}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Autoplay]}
        style={{ aspectRatio: '1.76 / 1' }}
        loop
      >
        {BANNER_ITEMS.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner {...banner} />
          </SwiperSlide>
        ))}
        <BannerNav />
      </Swiper>
    </Box>
  );
}
