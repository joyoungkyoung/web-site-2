import { Heading, Wrapper } from '@/components';
import { Box, Input, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import portfolioBanner from '@/images/portfolio-banner.jpg';
import { SearchSvg } from '@/components/@svg';

export default function Portfolio() {
  return (
    <Wrapper>
      <Box
        position={'relative'}
        top={'-120px'}
        sx={{
          aspectRatio: '2.74 / 1',
        }}
      >
        <Box position={'relative'}>
          <Image
            src={portfolioBanner}
            alt="portfolio-banner"
            style={{
              width: '100%',
              maxWidth: '100%',
              maxHeight: '590px',
              objectFit: 'cover',
            }}
          />
          <Box position={'absolute'} top={'11.5vw'} left={'64.8%'} zIndex={1}>
            <Heading t="h2">포트폴리오</Heading>
            <Box height={'0.4vw'} />
            <Typography>아파트멘터리가 바꾼 공간을 만나보세요.</Typography>
          </Box>
        </Box>
      </Box>
      <Box padding={'0 40px'} top={'-77.5px'}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <Input
            color="black"
            placeholder="아파트 또는 지역을 검색하세요."
            endAdornment={
              <InputAdornment position="end">
                <SearchSvg />
              </InputAdornment>
            }
            sx={{
              minWidth: '400px',
              ':hover': {
                ':before': {
                  borderBottom: '1px solid rgba(0,0,0,0.87) !important',
                },
              },
            }}
          />
        </Box>
      </Box>
    </Wrapper>
  );
}
