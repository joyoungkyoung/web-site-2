import { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { breakpoints, media } from '@/styles/mixins';
import styled from '@emotion/styled';
import Image from 'next/image';
import mainCustomerReview1 from '@/images/main-customer-review1.jpg';
import mainCustomerReview2 from '@/images/main-customer-review2.jpg';
import { Heading, SlidePagination } from '@/components';
import { SlideNextSvg, SlidePrevSvg } from '@/components/@svg';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import { Grid } from 'swiper/modules';
import 'swiper/css/grid';
import { REVIEW_ITEMS } from '../Home.constant';
import ReviewCard from './ReviewCard';

export default function ReviewSection() {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet}px)`);

  const handleClickSlidePrev = () => swiper?.slidePrev();
  const handleClickSlideNext = () => swiper?.slideNext();

  const swiperStyle: SwiperProps = {
    spaceBetween: 50,
    modules: [Grid],
    breakpoints: {
      [breakpoints.tablet]: {
        slidesPerView: 1,
        grid: { rows: 2, fill: 'row' },
      },
      [breakpoints.laptop]: {
        slidesPerView: 2,
        grid: undefined,
      },
      [breakpoints.desktop]: {
        slidesPerView: 3,
        grid: undefined,
      },
    },
  };

  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <ReviewBox>
        <Image src={matchTablet ? mainCustomerReview2 : mainCustomerReview1} alt="main-custom-review" />
        <Box height={'100px'} />
        <Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Heading t={matchTablet ? 'h4' : 'h2'}>아파트멘터리와 함께한 분들의 후기</Heading>
            <Box display={'flex'} gap={'10px'}>
              <IconButton onClick={handleClickSlidePrev}>
                <SlidePrevSvg />
              </IconButton>
              <IconButton onClick={handleClickSlideNext}>
                <SlideNextSvg />
              </IconButton>
            </Box>
          </Box>
          <Box height={'80px'} />
          <Swiper id="review-swiper" onSwiper={setSwiper} {...swiperStyle}>
            {REVIEW_ITEMS.map((item, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...item} index={index + 1} />
              </SwiperSlide>
            ))}
            {/* 페이지네이션 슬라이드 */}
            <Box height={'60px'} />
            <SlidePagination />
          </Swiper>
        </Box>
      </ReviewBox>
      <Box width={'40px'} />
    </Box>
  );
}

const ReviewBox = styled(Box)`
  width: 85%;
  > img {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: fit-content;
  }
  ${media.tablet`
    width: 100%;
    padding: 0 20px;
    > img {
      width: 100%;
      max-width: 100%;
      object-fit: cover;
      min-height: 160px;
    }
  `}
`;
