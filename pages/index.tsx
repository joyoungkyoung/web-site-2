import { Heading, RoundButton, Wrapper } from '@/components';
import { Box, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ApartCard, ApartPagination, Banner, Navigation, VideoSection } from '@/containers/Home';
import { APART_ITEMS, BANNER_ITEMS } from '@/containers/Home/Home.constant';
import 'swiper/css';
import ApartNav from '@/containers/Home/ApartNav';
import { breakpoints } from '@/styles/mixins';

export default function Home() {
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet})`);

  return (
    <Wrapper>
      {/* Swiper Section*/}
      <Box position={'relative'}>
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
      {/* FadeUp Section1 */}
      <Box data-aos="fade-up" marginBottom={'200px'} padding={`0 ${matchTablet ? '20px' : '40px'}`}>
        <Box display={'flex'} justifyContent={'space-between'} marginBottom={'65px'}>
          <Heading t={matchTablet ? 'h4' : 'h2'}>공간 활용도를 높인 30평대 아파트</Heading>
          {!matchTablet && <RoundButton>30평대 아파트 더 보기</RoundButton>}
        </Box>
        <Box>
          <Swiper slidesPerView={matchTablet ? 1 : 3} spaceBetween={50}>
            {APART_ITEMS.map((item, index) => (
              <SwiperSlide key={index}>
                <ApartCard {...item} />
              </SwiperSlide>
            ))}
            {/* 페이지네이션 슬라이드 */}
            <Box height={'60px'} />
            <ApartPagination slidesPerView={matchTablet ? 1 : 3} />
            {/* 네비게이션 버튼 */}
            {!matchTablet && <ApartNav />}
          </Swiper>
          <Box height={'30px'} />
        </Box>
      </Box>
    </Wrapper>
  );
}
