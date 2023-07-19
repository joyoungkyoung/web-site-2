import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import portfolioBanner from '@/images/portfolio-banner.jpg';
import { Heading } from '@/components';
import styled from '@emotion/styled';

export default function BannerSection() {
  return (
    <Box
      position={'relative'}
      top={'-120px'}
      sx={{
        aspectRatio: '2.74 / 1',
      }}
    >
      <Box position={'relative'}>
        <PortfolioBanner src={portfolioBanner} alt="portfolio-banner" />
        <Box position={'absolute'} top={'11.5vw'} left={'64.8%'} zIndex={1}>
          <Heading t="h2">포트폴리오</Heading>
          <Box height={'0.4vw'} />
          <Typography>아파트멘터리가 바꾼 공간을 만나보세요.</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const PortfolioBanner = styled(Image)`
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 590px;
  object-fit: cover;
`;
