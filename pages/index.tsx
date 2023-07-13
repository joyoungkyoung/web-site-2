import { Wrapper } from '@/components';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Banner, Navigation } from '@/containers/Home';
import { BANNER_ITEMS } from '@/containers/Home/Home.constant';
import 'swiper/css';

export default function Home() {
  return (
    <Wrapper>
      <Box position={'relative'}>
        {/* swiper */}
        <Swiper
          slidesPerView={'auto'}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          style={{ aspectRatio: '1.76 / 1' }}
          modules={[Autoplay]}
          loop
        >
          {BANNER_ITEMS.map((banner, index) => (
            <SwiperSlide key={index}>
              <Banner {...banner} />
            </SwiperSlide>
          ))}
          <Navigation />
        </Swiper>
      </Box>
    </Wrapper>
  );
}
