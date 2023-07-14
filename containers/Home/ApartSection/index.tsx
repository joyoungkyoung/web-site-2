import { Heading, RoundButton, SlidePagination } from '@/components';
import { breakpoints, media } from '@/styles/mixins';
import { Box, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import { ApartItem } from '../Home.constant';
import ApartCard from './ApartCard';
import ApartNav from './ApartNav';

interface ApartSectionProps {
  title: string;
  btn: { href: string; text: string };
  items: ApartItem[];
}
export default function ApartSection({ title, btn, items }: ApartSectionProps) {
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet})`);

  return (
    <Box data-aos="fade-up" marginBottom={'200px'} padding={`0 ${matchTablet ? '20px' : '40px'}`}>
      <TitleWrapper>
        <Heading t={matchTablet ? 'h4' : 'h2'}>{title}</Heading>
        {!matchTablet && <RoundButton>{btn.text}</RoundButton>}
      </TitleWrapper>
      <Box>
        <Swiper slidesPerView={matchTablet ? 1 : 3} spaceBetween={50}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <ApartCard {...item} />
            </SwiperSlide>
          ))}
          {/* 페이지네이션 슬라이드 */}
          <Box height={'60px'} />
          <SlidePagination slidesPerView={matchTablet ? 1 : 3} />
          {/* 네비게이션 버튼 */}
          {!matchTablet && <ApartNav />}
        </Swiper>
        <Box height={'30px'} />
      </Box>
    </Box>
  );
}

const TitleWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;

  ${media.tablet`
    margin-bottom: 20px;
  `}
`;
