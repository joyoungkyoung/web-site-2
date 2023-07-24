import { Heading } from '@/components';
import styled from '@emotion/styled';
import { Box, Grid, Link, Typography } from '@mui/material';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { getRangeByPrice } from '../Portfolio.func';

interface CardProps {
  id: string;
  src: StaticImageData;
  title: string;
  desc: string;
  price: number;
}
export default function Card({ id, src, title, desc, price }: CardProps) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Link href={`/portfolio/${id}`}>
        <Box>
          <Thumbnail src={src} alt="thumbnail" />
          <Box height={'30px'} />
          <Heading t="h4">{title}</Heading>
          <Box height={'10px'} />
          <Typography>{desc}</Typography>
          <Box height={'20px'} />
          <Typography fontWeight={700}>{getRangeByPrice(price)}</Typography>
        </Box>
      </Link>
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
