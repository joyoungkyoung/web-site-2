import { Wrapper } from '@/components';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ApartSection, Banner, Navigation, ReviewSection, VideoSection } from '@/containers/Home';
import { APART_ITEMS, APART_ITEMS2, BANNER_ITEMS } from '@/containers/Home/Home.constant';
import 'swiper/css';

export default function Home() {
  return (
    <Wrapper>
      {/* Swiper Section*/}
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
          <Navigation />
        </Swiper>
      </Box>
      {/* Video Section */}
      <VideoSection />
      {/* Apart Section1 */}
      <ApartSection
        title="공간 활용도를 높인 30평대 아파트"
        btn={{ href: '', text: '30평대 아파트 더 보기' }}
        items={APART_ITEMS}
      />
      {/* Apart Section2 */}
      <ApartSection
        title="오래도록 아름다운 구축 아파트"
        btn={{ href: '', text: '구축 아파트 더 보기' }}
        items={APART_ITEMS2}
      />
      {/* Review Section */}
      <ReviewSection />
    </Wrapper>
  );
}
