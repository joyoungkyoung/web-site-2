import { Heading } from '@/components';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface CardProps {
  src: StaticImageData;
  title: string;
  desc: string;
  price: string;
}
export default function Card({ src, title, desc, price }: CardProps) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box>
        <Thumbnail src={src} alt="thumbnail" />
        <Box height={'30px'} />
        <Heading t="h4">{title}</Heading>
        <Box height={'10px'} />
        <Typography>{desc}</Typography>
        <Box height={'20px'} />
        <Typography fontWeight={700}>{price}</Typography>
      </Box>
    </Grid>
  );
}

const Thumbnail = styled(Image)`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1.52632/1;
  object-fit: cover;
  max-height: 100%;
`;
