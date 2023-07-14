import { Heading, RoundButton, Wrapper } from '@/components';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ApartCard, ApartPagination, Banner, Navigation } from '@/containers/Home';
import { APART_ITEMS, BANNER_ITEMS } from '@/containers/Home/Home.constant';
import 'swiper/css';
import ApartNav from '@/containers/Home/ApartNav';
import { breakpoints } from '@/styles/mixins';

export default function Home() {
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop})`);
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
      <Box maxWidth={'1920px'} margin={'0 auto'}>
        <Box height={'90px'} />
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'80px'}>
          <video
            src="/videos/main-introduce.mp4"
            autoPlay
            muted
            style={{
              objectFit: 'cover',
              width: '510px',
              maxWidth: '55%',
            }}
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            maxWidth={'412px'}
          >
            <Heading t="h2">걱정 없이 기대만 남을 인테리어 서비스</Heading>
            <Box height={'20px'} />
            <Typography>
              집을 고치기로 결심한 순간부터 쌓이는 고민들. 아파트멘터리와 함께라면 걱정 없이 설렘만 가득할 거에요.
            </Typography>
            <Box height={'40px'} />
            <RoundButton>서비스 알아보기</RoundButton>
          </Box>
        </Box>
        <Box height={'200px'} />
      </Box>
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
