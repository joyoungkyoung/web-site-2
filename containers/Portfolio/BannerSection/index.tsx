import { Box, Typography } from '@mui/material';
import portfolioBanner from '@/images/portfolio-banner.jpg';
import { BannerImage, Heading } from '@/components';

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
        <BannerImage src={portfolioBanner} alt="portfolio-banner" />
        <Box position={'absolute'} top={'11.5vw'} left={'64.8%'} zIndex={1}>
          <Heading t="h2">포트폴리오</Heading>
          <Box height={'0.4vw'} />
          <Typography>아파트멘터리가 바꾼 공간을 만나보세요.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
