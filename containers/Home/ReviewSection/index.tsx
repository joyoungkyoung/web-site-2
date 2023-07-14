import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import mainCustomerReview from '@/images/main-customer-review.jpg';
import { Heading, SlidePagination } from '@/components';
import { SlideNextSvg, SlidePrevSvg } from '@/components/@svg';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { REVIEW_ITEMS } from '../Home.constant';
import ReviewCard from './ReviewCard';

export default function ReviewSection() {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handleClickSlidePrev = () => swiper?.slidePrev();
  const handleClickSlideNext = () => swiper?.slideNext();

  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Box width={'85%'}>
        <Image
          src={mainCustomerReview}
          alt="main-customer-review"
          style={{ width: '100%', maxWidth: '100%', objectFit: 'cover', height: 'fit-content' }}
        />
        <Box height={'100px'} />
        <Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Heading t="h2">아파트멘터리와 함께한 분들의 후기</Heading>
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
          <Swiper slidesPerView={3} spaceBetween={50} onSwiper={setSwiper}>
            {REVIEW_ITEMS.map((item, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...item} index={index + 1} />
              </SwiperSlide>
            ))}
            {/* 페이지네이션 슬라이드 */}
            <Box height={'60px'} />
            <SlidePagination slidesPerView={3} />
          </Swiper>
        </Box>
      </Box>
      <Box width={'40px'} />
    </Box>
  );
}
