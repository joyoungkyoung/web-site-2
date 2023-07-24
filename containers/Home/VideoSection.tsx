import { Heading, RoundTitleButton } from '@/components';
import { breakpoints, media } from '@/styles/mixins';
import styled from '@emotion/styled';
import { Box, Typography, useMediaQuery } from '@mui/material';
import mainIntroduce from '@/videos/main-introduce.mp4';

export default function VideoSection() {
  const matchTablet = useMediaQuery(`(max-width:${breakpoints.tablet}px)`);

  return (
    <Box maxWidth={'1920px'} margin={'0 auto'}>
      <Box height={'90px'} />
      <Box display={'flex'} justifyContent={'center'}>
        <VideoWrapper>
          <video
            src={mainIntroduce}
            autoPlay
            muted
            style={{
              objectFit: 'cover',
              width: '510px',
              maxWidth: '55%',
            }}
          />
          <Box width={'80px'} />
          <VideoCaption
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            maxWidth={'412px'}
          >
            <Heading t={matchTablet ? 'h4' : 'h2'}>걱정 없이 기대만 남을 인테리어 서비스</Heading>
            <Box height={'20px'} />
            <Typography variant={matchTablet ? 'body2' : 'body1'}>
              집을 고치기로 결심한 순간부터 쌓이는 고민들. 아파트멘터리와 함께라면 걱정 없이 설렘만 가득할 거에요.
            </Typography>
            <Box height={'40px'} />
            <RoundTitleButton>서비스 알아보기</RoundTitleButton>
          </VideoCaption>
        </VideoWrapper>
      </Box>
      <Box height={'200px'} />
    </Box>
  );
}

const VideoWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    flex-direction: column;
    align-items: flex-start;
    width: 510px;
  `}
`;

const VideoCaption = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 412px;

  ${media.tablet`
    margin-top: 40px
  `}
`;
