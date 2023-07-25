import Image from 'next/image';
import { breakpoints } from '@/styles/mixins';
import styled from '@emotion/styled';
import { Box, BoxProps, Typography, useMediaQuery } from '@mui/material';
import portfolioSimilar from '@/images/portfolio-similar.jpg';
import portfolioSimilarEstimation from '@/images/portfolio-similar-estimation.jpg';
import mainIntroduce from '@/images/main-introduce.jpg';
import { Heading, RoundTitleButton } from '@/components';

export default function MoreSection() {
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);

  const outerGap = matchLaptop ? '120px' : '200px';
  const innerGap = matchLaptop ? '40px' : '80px';
  const headingSize = matchLaptop ? 'h4' : 'h2';

  return (
    <Box marginTop={outerGap} display={'flex'} flexDirection={'column'} gap={outerGap}>
      {/*  */}
      <ItemBox gap={innerGap}>
        <ImageBox flex={1} data-aos="fade-up">
          <BannerImage src={portfolioSimilar} alt="portfolio-similar" />
        </ImageBox>
        <TextBox flex={1} gap={matchLaptop ? '20px' : '50px'} data-aos="fade-up" data-aos-delay={300}>
          <Heading t={headingSize}>{`비슷한 평형대의\n다른 아파트를 둘러보세요.`}</Heading>
          <RoundTitleButton>더 보기</RoundTitleButton>
        </TextBox>
      </ItemBox>
      {/*  */}
      <ItemBox gap={innerGap}>
        <TextBox dir="right" flex={1} gap={matchLaptop ? '20px' : '50px'} data-aos="fade-up" data-aos-delay={300}>
          <Heading t={headingSize}>{`비슷한 견적의\n포트폴리오가 더 있어요.`}</Heading>
          <RoundTitleButton>더 보기</RoundTitleButton>
        </TextBox>
        <ImageBox flex={1} data-aos="fade-up">
          <BannerImage src={portfolioSimilarEstimation} alt="portfolio-similar-estimation" />
        </ImageBox>
      </ItemBox>
      {/*  */}
      <ItemBox gap={innerGap}>
        <ImageBox data-aos="fade-up" sx={{ maxWidth: '55%', width: matchLaptop ? '340px' : '510px' }}>
          <BannerImage src={mainIntroduce} alt="main-introduce" />
        </ImageBox>
        <TextBox data-aos="fade-up" data-aos-delay={300}>
          <Heading t={headingSize}>{`걱정 없이 기대만 남을\n인테리어 서비스`}</Heading>
          <Box height={'20px'} />
          <Typography>{`집을 고치기로 결심한 순간부터 쌓이는 고민들.\n아파트멘터리와 함께라면 걱정 없이 설렘만 가득할 거예요.`}</Typography>
          <Box height={'40px'} />
          <RoundTitleButton>서비스 알아보기</RoundTitleButton>
        </TextBox>
      </ItemBox>
    </Box>
  );
}

const ItemBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

interface TextBoxProps extends BoxProps {
  dir?: 'left' | 'right';
}
const TextBox = styled((props: TextBoxProps) => <Box {...props} />)(({ theme, dir = 'left' }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: dir === 'left' ? 'flex-start' : 'flex-end',
  textAlign: dir === 'left' ? 'start' : 'end',
}));

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerImage = styled(Image)`
  max-width: 100%;
  height: fit-content;
  object-fit: cover;
`;
