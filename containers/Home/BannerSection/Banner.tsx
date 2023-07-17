import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Heading } from '@/components';
import { ArrowRightSvg } from '@/svg';
import { Box, Button, Typography } from '@mui/material';
import { useSwiperSlide } from 'swiper/react';

interface BannerProps {
  src: string;
  title: string;
  desc: string;
  color?: string;
}
export default function Banner({ src, title, desc, color = '#000000' }: BannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperSlide = useSwiperSlide();

  const isImage = src.endsWith('.jpg') || src.endsWith('.png') || src.endsWith('.jpeg');
  const isVideo = src.endsWith('.mp4');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [swiperSlide?.isActive]);

  return (
    <Box position={'relative'} height={'100%'}>
      {isImage && <Image src={src} alt="banner-image" fill />}
      {isVideo && <video ref={videoRef} src={src} style={{ width: '100%', objectFit: 'cover' }} loop muted />}
      <Detail color={color}>
        <Box paddingLeft={'8px'}>
          <Heading t="h2" fontSize="calc(40px + 0.3vw)" lineHeight="calc(40px + 1.3vw)">
            {title}
          </Heading>
          <Box height={'0.4vw'} />
          <Typography>{desc}</Typography>
          <Box height={'40px'} />
          <Box>
            <DetailButton variant="text">
              <Typography color={color}>
                자세히보기 <ArrowRightSvg color={color} />
              </Typography>
            </DetailButton>
          </Box>
        </Box>
      </Detail>
    </Box>
  );
}

const Detail = styled(Box)`
  position: absolute;
  top: 15.5vw;
  left: 60%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const DetailButton = styled(Button)`
  padding: 0;
  > p {
    font-weight: 700;
    line-height: 28px;
  }
  &:hover {
    background-color: rgba(19, 19, 19, 0.04);
  }
`;
