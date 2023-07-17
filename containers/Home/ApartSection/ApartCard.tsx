import { Heading } from '@/components';
import { breakpoints } from '@/styles/mixins';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

interface ApartCardProps {
  src: StaticImageData | string;
  title: string;
  desc: string;
  price: string;
}
export default function ApartCard({ src, title, desc, price }: ApartCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { width: windowWidth } = useWindowSize();

  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet}px)`);

  useEffect(() => {
    if (imageRef.current) {
      const width = imageRef.current.clientWidth;
      const height = width / 1.52632;

      if (imageRef.current.parentElement) {
        imageRef.current.parentElement.style.height = `${height}px`;
      }
    }
  }, [windowWidth, imageRef.current?.clientWidth]);

  let variant: { [key: string]: Variant } = {
    title: 'h4',
    desc: 'body1',
  };

  if (matchLaptop)
    variant = {
      title: 'body1',
      desc: 'body2',
    };
  if (matchTablet)
    variant = {
      title: 'body2',
      desc: 'caption',
    };

  return (
    <Box display={'flex'} flexDirection={'column'} data-aos="fade-up" sx={{ cursor: 'pointer' }}>
      <Box>
        <Image
          ref={imageRef}
          src={src}
          alt="apart-item"
          style={{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box height={'30px'} />
      <Heading t={variant.title}>{title}</Heading>
      <Box height={'10px'} />
      <Typography variant={variant.desc}>{desc}</Typography>
      <Box height={'20px'} />
      <Typography fontWeight={'bold'}>{price}</Typography>
    </Box>
  );
}
